function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    Register
                </h2>

                <input 
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 mb-3 border rounded"
                />

                <input 
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 mb-3 border rounded"
                />

                <input 
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 mb-4 border rounded"
                />

                <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
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