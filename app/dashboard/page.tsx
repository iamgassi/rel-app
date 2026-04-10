"use client";

import AppLayout from "@/components/layout/AppLayout";
import StatCard from "@/components/StatCard";
import EventCard from "@/components/EventCard";

import { Bell, AlertCircle, Gift } from "lucide-react";

export default function Dashboard() {
  return (
    <AppLayout>

      {/* Greeting */}
      <h1 className="text-2xl font-semibold">
        Hi Jasmeet 👋
      </h1>

      {/* Stats */}
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

    </AppLayout>
  );
}