import React, { useContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const coockies = new Cookies();
  const {setAuth} = useContext(AuthContext);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate()
  const handleRedirect = (role) => {
    switch (role) {
      case 'admin':
        navigate('/dashboard/admin/barang');
        break;
      case 'warehouse_staff':
        navigate('/dashboard/staff/barang');
        break;
      case 'requester':
        navigate('/dashboard/requester');
        break;
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);


    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');

    axios.post('http://127.0.0.1:8000/api/auth/login', { 
      email, 
      password 
    }, {
      withCredentials: true
    })
    .then((response) => {
      coockies.set('Authorization', response.data.token);
      localStorage.setItem('auth', JSON.stringify(response.data.token));
      localStorage.setItem('activeLink', 'barang')
      axios.get('http://127.0.0.1:8000/api/auth/getuser', {
        headers : {
          Authorization: `Bearer ${response.data.token}`
        }
        })
        .then(response => {
          setAuth(response.data.user);
          console.log(response)
          const role = response.data.user.role;
          handleRedirect(role);
        });
    })
    .catch((error) => {
      console.error(error);
      setMessage(error.response.data.message);
      setLoading(false);
    })
  };
  
  return (
    <div className="bg-gray-50 flex items-center justify-center fixed z-50x inset-0">
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
            <input 
              type={loading ? "button" : "submit"} 
              value={loading ? ('Loading...') : ('Login')} 
              className="w-full bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-blue-600"/>
          </div>
        </form>
      </div>
    </div>
  );
}