"use client";
import { Building2, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

function HomeNavbar() {
  const pathName = usePathname();
  const { data: session, status } = useSession();
  const navLinks = [
    { title: "Dashboard", href: "/dashboard/home/overview" },
    { title: "Getting Started", href: "/dashboard/home/getting-started" },
    { title: "Recent Updates", href: "/dashboard/home/updates" },
    { title: "Announcements", href: "/dashboard/home/announcements" },
  ];

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  if (status === "loading") {
    return (
      <div className="h-32 p-5 bg-slate-50 border-b border-slate-300">
        <div className="flex space-x-3">
          <div className="flex w-12 h-12 rounded-lg bg-white items-center justify-center">
            <Building2 />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-slate-700">Loading...</p>
            <span className="text-sm">User</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-32 p-5 bg-slate-50 border-b border-slate-300">
      <div className="flex justify-between items-start">
        <div className="flex space-x-3">
          <div className="flex w-12 h-12 rounded-lg bg-white items-center justify-center">
            <Building2 />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-slate-700">
              Hello, {session?.user?.name || "User"}
            </p>
            <span className="text-sm">{session?.user?.email}</span>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
      <nav className="sticky mt-6 flex space-x-4">
        {navLinks.map((item, i) => {
          return (
            <Link
              key={i}
              href={item.href}
              className={`${
                pathName === item.href
                  ? "py-1 border-b-2 border-blue-600"
                  : "py-1"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default HomeNavbar;
