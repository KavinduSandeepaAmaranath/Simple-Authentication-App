import { use, useState } from "react";
import axios from "axios";

function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    email: email,
                    password: password,
                }
            );

            console.log(res.data);
            alert("Login successful");
        } catch (error) {
            console.log(error.response?.data || error.message);
            alert("Login failed");
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleLogin} 
                className="bg-white p-6 rounded-lg shadow-md w-80"
            >
                <h2 className="text-2xl font-bold mp-4 text-center">
                    Login
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 mb-3 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 mb-4 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>

                <p className="text-sm mt-3 text-center">
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-600 hover:underline">
                        Register
                    </a>
                </p>
            </form>
        </div>
    );
}

export default Login;