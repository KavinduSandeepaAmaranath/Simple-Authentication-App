import { use, useState } from "react";
import axios from "axios";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/register",
                {
                    name: name,
                    email: email,
                    password: password,
                }
            );

            console.log(res.data);
            alert("Registration successful");
        } catch (error) {
            console.log(error.response?.data || error.message);
            alert("Registration failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form 
                onSubmit={handleRegister}
                className="bg-white p-6 rounded-lg shadow-md w-80"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">
                    Register
                </h2>

                <input 
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 mb-3 border rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

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
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                    Register
                </button>

                <p className="text-sm mt-3 text-center">
                    Already have an account?{""}
                    <a href="/" className="text-blue-600 hover:underline">
                        Login
                    </a>
                </p>
            </form>
        </div>

    );
    
}

export default Register;