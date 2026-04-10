"use client";

import AppLayout from "@/components/layout/AppLayout";
import StatCard from "@/components/StatCard";
import EventCard from "@/components/EventCard";
import AddReminderModal from "@/components/AddReminderModal";

import { useReminders } from "@/hooks/useReminders";

import { Bell, AlertCircle, Gift } from "lucide-react";

export default function Dashboard() {
  const { reminders, addReminder } = useReminders();

  return (
    <AppLayout>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          Hi Jasmeet 👋
        </h1>

        <AddReminderModal onAdd={addReminder} />
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Upcoming"
          value={reminders.length}
          icon={Bell}
        />

        <StatCard title="Missed" value="0" icon={AlertCircle} />

        <StatCard title="Saved Gifts" value="0" icon={Gift} />
      </div>

      {/* Reminders */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Upcoming Reminders
        </h2>

        <div className="space-y-3">
          {reminders.map((r) => (
            <EventCard
              key={r.id}
              title={`${r.name} - ${r.occasion}`}
              subtitle={new Date(r.date).toDateString()}
            />
          ))}
        </div>
      </div>

    </AppLayout>
  );
}