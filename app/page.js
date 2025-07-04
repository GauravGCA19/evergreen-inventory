import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col bg-gray-50">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Inventory Management System
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to the Evergreen Inventory Management System
        </p>
        <div className="space-x-4">
          <Link 
            href="/login" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/register" 
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
