"use client";

import { useRouter, usePathname } from "next/navigation";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Reminders", path: "/reminders" },
    { name: "Gifts", path: "/gifts" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4 flex flex-col">
        <h2
         className="text-xl font-bold mb-6 cursor-pointer"
         onClick={() => router.push("/")}
        >
         RelApp
        </h2>

        <nav className="space-y-4 text-sm">
          {navItems.map((item) => (
            <p
              key={item.path}
              onClick={() => router.push(item.path)}
              className={`cursor-pointer ${
                pathname === item.path
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.name}
            </p>
          ))}
        </nav>
      </aside>

      {/* Right Section */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <div className="h-14 bg-white border-b flex items-center px-6">
          <h2 className="font-semibold capitalize">
            {pathname.replace("/", "") || "Dashboard"}
          </h2>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6 space-y-6">
          {children}
        </div>

      </div>
    </div>
  );
}