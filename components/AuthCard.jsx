"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AuthCard({ mode, onSubmit, isLoading, error, success, children }) {
  const router = useRouter();

  const handleTab = (tab) => {
    if (tab === "login") router.push("/login");
    else router.push("/register");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-2">
            <Image src="/logo.png" alt="Logo" width={160} height={64} priority />
          </div>
          <p className="text-sm text-gray-500 mt-1">Smart Inventory Management</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-8">
          <div className="flex mb-6 border-b border-gray-200">
            <button
              className={`flex-1 py-2 text-center font-semibold transition-colors ${mode === "login" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
              onClick={() => handleTab("login")}
              type="button"
            >
              Sign In
            </button>
            <button
              className={`flex-1 py-2 text-center font-semibold transition-colors ${mode === "register" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
              onClick={() => handleTab("register")}
              type="button"
            >
              Register
            </button>
          </div>
          <form className="space-y-4" onSubmit={onSubmit}>
            {children}
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            {success && <div className="text-green-600 text-sm text-center">{success}</div>}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors disabled:opacity-50"
            >
              {isLoading ? (mode === "login" ? "Signing in..." : "Registering...") : (mode === "login" ? "Sign In" : "Register")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 