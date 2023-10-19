import React, { useContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';

const EyeIconOpen = () => (
  <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"/>
    </g>
  </svg>
);
  
const EyeIconClosed = () => (
  <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>
);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const coockies = new Cookies();
  const {auth, setAuth} = useContext(AuthContext);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate()
  const handleRedirect = (role) => {
    switch (role) {
      case 'admin':
        navigate('/dashboard/admin');
        break;
      case 'warehouse_staff':
        navigate('/dashboard/staff');
        break;
      case 'requester':
        navigate('/dashboard/requester');
        break;
        default:
        navigate('/');
        break;
    }
  } 

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')

    axios.post('http://127.0.0.1:8000/api/auth/login', { 
      email, 
      password 
    }, {
      withCredentials: true
    })
    .then((response) => {
      setLoading(false);
      console.log(`Bearer ${coockies.get("Authorization")}`)
      coockies.set('Authorization', response.data.token);

      axios.get('http://127.0.0.1:8000/api/auth/user', {
        headers : {
          Authorization: `Bearer ${response.data.token}`
        }
      })
      .then(response => {
        setAuth(response.data.user);
        localStorage.setItem('auth', JSON.stringify(response.data.user));
        const role = response.data.user.role;
        handleRedirect(role);
        return response;
      });
    })
    .catch((error) => {
      console.error(error);
      setMessage(error.response.data.message);
      setLoading(false);
    });
  };
  
  return (
    <div className="bg-gray-50 flex items-center justify-center h-screen">
      <div className="bg-white p-8 space-y-6 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold text-gray-900">Login</h1>
        <form className="space-y-4" onSubmit={handleLogin} method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full py-1 border-b border-gray-300 text-gray-900 text-sm outline-none focus:border-black placeholder:text-gray-400"
              placeholder="user@gmail.com"
              value={email}
              onChange={handleEmail}
            >
            </input>
          </div>
          <div className="relative w-full inline-block">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full py-1 border-b border-gray-300 text-gray-900 text-sm outline-none focus:border-black placeholder:text-gray-400"
              placeholder="••••••••"
              value={password}
              onChange={handlePassword}
            />
          <p className='text-red-900 text-sm italic'>{message}</p>
          </div>
          <div>
            <input type="submit" value={"Login"} className="w-full bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-blue-600"/>
          </div>
        </form>
      </div>
    </div>
  );
}