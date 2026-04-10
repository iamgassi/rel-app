"use client";

import EventCard from "@/components/EventCard";
import StatCard from "@/components/StatCard";

import { Bell, AlertCircle, Gift } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <h2 className="text-xl font-bold mb-6">RelApp</h2>

        <nav className="space-y-4 text-sm text-muted-foreground">
          <p className="cursor-pointer hover:text-primary">Dashboard</p>
          <p className="cursor-pointer hover:text-primary">Reminders</p>
          <p className="cursor-pointer hover:text-primary">Gifts</p>
          <p className="cursor-pointer hover:text-primary">Settings</p>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">

        {/* Greeting */}
        <h1 className="text-2xl font-semibold">Hi Jasmeet 👋</h1>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StatCard title="Upcoming" value="5" icon={Bell} />
          <StatCard title="Missed" value="1" icon={AlertCircle} />
          <StatCard title="Saved Gifts" value="12" icon={Gift} />
        </div>

        {/* Upcoming Reminders */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Upcoming Reminders
          </h2>

          <div className="space-y-3">
            <EventCard
              title="Mom Birthday"
              subtitle="In 3 days"
              action="View"
            />

            <EventCard
              title="Friend Anniversary"
              subtitle="In 5 days"
              action="View"
            />
          </div>
        </div>

      </main>
    </div>
  );
}