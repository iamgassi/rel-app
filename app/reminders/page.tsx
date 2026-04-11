"use client";

import { useState } from "react";

import AppLayout from "@/components/layout/AppLayout";
import EventCard from "@/components/EventCard";
import AddReminderModal from "@/components/AddReminderModal";
import ReminderFormDialog from "@/components/ReminderFormDialog";

import { useReminders, type Reminder } from "@/hooks/useReminders";
import { formatDate } from "@/utils/formatDate";
import { sortReminders } from "@/utils/sortReminders";

export default function Reminders() {
  const { reminders, addReminder, deleteReminder, updateReminder } =
    useReminders();

  const [editing, setEditing] = useState<Reminder | null>(null);

  const sortedReminders = sortReminders(reminders);

  return (
    <AppLayout>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          Reminders
        </h1>

        <AddReminderModal onAdd={addReminder} />
      </div>

      {/* List */}
      <div className="space-y-3">
        {sortedReminders.length === 0 ? (
          <p className="text-muted-foreground">
            No reminders yet
          </p>
        ) : (
          sortedReminders.map((r) => (
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
          ))
        )}
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