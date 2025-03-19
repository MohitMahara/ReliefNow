import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <section className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-4">Create an Account</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input type="email" className="w-full p-2 border rounded-md" placeholder="name@example.com" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input type="password" className="w-full p-2 border rounded-md" placeholder="••••••••" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Confirm Password</label>
                        <input type="password" className="w-full p-2 border rounded-md" placeholder="••••••••" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                        Sign Up
                    </button>
                    <p className="text-center text-sm">
                        Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default RegisterPage;