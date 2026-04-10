"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import AddPersonModal from "./AddPersonModal";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">

      {/* Left - Logo */}
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg">
          R
        </div>
        <h1 className="text-xl font-semibold tracking-tight text-primary">
          RelApp
        </h1>
      </div>

      {/* Center - Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
        <span className="hover:text-primary cursor-pointer transition"  onClick={() => router.push("/dashboard")}>Dashboard</span>
        <span className="hover:text-primary cursor-pointer transition">Events</span>
        <span className="hover:text-primary cursor-pointer transition">Suggestions</span>
      </nav>

      {/* Right - Actions */}
      <div className="flex items-center gap-3">

        <Button variant="ghost" className="hidden sm:inline-flex">
          Login
        </Button>

        {/* <Button className="rounded-xl shadow-sm">
          + Add Person
        </Button> */}
        <AddPersonModal />

        <Avatar className="h-9 w-9">
          <AvatarFallback>JG</AvatarFallback>
        </Avatar>

      </div>
    </header>
  );
}