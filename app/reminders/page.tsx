"use client";

import AppLayout from "@/components/layout/AppLayout";
import EventCard from "@/components/EventCard";
import AddReminderModal from "@/components/AddReminderModal";

import { useReminders } from "@/hooks/useReminders";
import { formatDate } from "@/utils/formatDate";

export default function Reminders() {
  const { reminders, addReminder } = useReminders();

  const sortedReminders = [...reminders].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );

  return (
    <AppLayout>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          Reminders
        </h1>

        <AddReminderModal onAdd={addReminder} />
      </div>

      <div className="space-y-3">
        {sortedReminders.length === 0 ? (
          <p className="text-muted-foreground">
            No reminders yet
          </p>
        ) : (
          sortedReminders.map((r) => (
            <EventCard
              key={r.id}
              title={`${r.name} - ${r.occasion}`}
              subtitle={formatDate(r.date)}
            />
          ))
        )}
      </div>

    </AppLayout>
  );
}