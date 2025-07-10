import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* name acting as logo  */}
                <h1 className="text-2xl font-bold tracking-tight">PLP Task Manager</h1>

                {/* links */}
                <div className="space-x-4 text-lg">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/counter" className="hover:underline">Counter</Link>
                    <Link to="/tasks" className="hover:underline">Tasks</Link>
                    <Link to="/api" className="hover:underline">API</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;