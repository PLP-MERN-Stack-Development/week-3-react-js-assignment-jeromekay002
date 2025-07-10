import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Navbar />
            <main className="flex-grow w-full py-6 px-4 sm:px-6 lg:px-8">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
