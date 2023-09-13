import React from "react";

function Login() {
    return (
        <div className="bg-gray-50 flex items-center justify-center h-screen">
            <div class="bg-white p-8 space-y-6 rounded-lg shadow-md w-96">
                <h1 class="text-3xl font-bold text-gray-900">
                    Login
                </h1>
                <form className="space-y-4" action="#" method="POST">
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                        <input type="text" id="email" name="email" class="w-full py-1 border-b border-gray-300 text-gray-900 text-sm outline-none focus:border-black placeholder:text-gray-400" placeholder="user@gmail.com"></input>
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-900">Password</label>
                        <input type="password" id="password" name="password" class="w-full py-1 border-b border-gray-300 text-gray-900 text-sm outline-none focus:border-black placeholder:text-gray-400" placeholder="••••••••"></input>
                    </div>
                    <div className="text-right">
                        <a className="w-full text-sm text-blue-500" href="#">Forgot your password?</a>
                    </div>
                    <div>
                        <button type="submit" class="w-full bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-blue-600">Login</button>
                    </div>
                    <div className="text-center">
                        <p className="text-sm">Not registered yet? <a className="font-medium text-blue-500" href="#">Create account</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;