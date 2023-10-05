import React, { Component } from 'react';

const EyeIconOpen = () => (
  <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"/>
    </g>
  </svg>
);
  
const EyeIconClosed = () => (
  <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>
);

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      showPassword: false,
      allRequirementsMet: false,
    };
    this.requirements = [
      { regex: /.{8,}/, text: 'At least 8 characters length' },
      { regex: /[0-9]/, text: 'At least 1 number (0...9)' },
      { regex: /[a-z]/, text: 'At least 1 lowercase letter (a...z)' },
      { regex: /[^A-Za-z0-9]/, text: 'At least 1 special symbol (!...$)' },
      { regex: /[A-Z]/, text: 'At least 1 uppercase letter (A...Z)' },
    ];
  }

  handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    this.setState({ password: newPassword }, () => {
      this.checkRequirements();
    });
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  checkRequirements = () => {
    const allMet = this.requirements.every((req) =>
      req.regex.test(this.state.password)
    );
    this.setState({ allRequirementsMet: allMet });
  };

  render() {
    return (
      <div className="bg-gray-50 flex items-center justify-center h-screen">
        <div className="bg-white p-8 space-y-6 rounded-lg shadow-md w-96">
          <h1 className="text-3xl font-bold text-gray-900">Login</h1>
          <form className="space-y-4" action="/dashboard/admin" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full py-1 border-b border-gray-300 text-gray-900 text-sm outline-none focus:border-black placeholder:text-gray-400"
                placeholder="user@gmail.com"
              ></input>
            </div>
            <div className="relative w-full inline-block">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.handlePasswordChange}
                id="password"
                name="password"
                className="w-full py-1 border-b border-gray-300 text-gray-900 text-sm outline-none focus:border-black placeholder:text-gray-400"
                placeholder="••••••••"
              />
               <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer select-none"
                onClick={this.togglePasswordVisibility}
                style={{ cursor: 'pointer'}}
              >
                {this.state.showPassword ? <EyeIconOpen /> : <EyeIconClosed />}
              </span>
            </div>
            <div className="text-right">
              <a
                className="w-full text-sm text-blue-500"
                href="#"
              >
                Forgot your password?
              </a>
            </div>
            <div>
              <input type="submit" value={"Login"} className="w-full bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-blue-600"/>
            </div>
            <div className="text-center">
              <p className="text-sm">
                Not registered yet?{' '}
                <a
                  className="font-medium text-blue-500"
                  href="#"
                >
                  Create account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}