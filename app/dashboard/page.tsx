"use client";

import { useState } from "react";

import AppLayout from "@/components/layout/AppLayout";
import StatCard from "@/components/StatCard";
import EventCard from "@/components/EventCard";
import AddReminderModal from "@/components/AddReminderModal";
import ReminderFormDialog from "@/components/ReminderFormDialog";

import { useReminders, type Reminder } from "@/hooks/useReminders";
import { formatDate } from "@/utils/formatDate";
import { sortReminders } from "@/utils/sortReminders";

import { Bell, AlertCircle, Gift } from "lucide-react";

export default function Dashboard() {
  const { reminders, addReminder, deleteReminder, updateReminder } =
    useReminders();

  const [editing, setEditing] = useState<Reminder | null>(null);

  const sortedReminders = sortReminders(reminders);

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
        <StatCard title="Upcoming" value={reminders.length} icon={Bell} />
        <StatCard title="Missed" value="0" icon={AlertCircle} />
        <StatCard title="Saved Gifts" value="0" icon={Gift} />
      </div>

      {/* Upcoming Reminders */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Upcoming Reminders
        </h2>

        <div className="space-y-3">
          {sortedReminders.slice(0, 3).map((r) => (
            <EventCard
              key={r.id}
              name={r.name}
              occasion={r.occasion}
              date={formatDate(r.date)}
              notes={r.notes}
              onEdit={() => setEditing(r)}
              onDelete={() => {
                if (confirm("Delete this reminder?")) {
                  deleteReminder(r.id);
                }
              }}
            />
          ))}
        </div>
      </div>

      <ReminderFormDialog
        open={editing != null}
        onOpenChange={(open) => {
          if (!open) setEditing(null);
        }}
        initialReminder={editing}
        onUpdate={(id, data) => updateReminder(id, data)}
      />

    </AppLayout>
  );
}