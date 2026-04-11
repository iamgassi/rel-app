"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import ReminderFormDialog from "@/components/ReminderFormDialog";

import type { Reminder } from "@/hooks/useReminders";

export default function AddReminderModal({
  onAdd,
}: {
  onAdd: (reminder: Reminder) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button className="rounded-xl" onClick={() => setOpen(true)}>
        + Add Reminder
      </Button>

      <ReminderFormDialog
        open={open}
        onOpenChange={setOpen}
        initialReminder={null}
        onCreate={(data) => {
          onAdd({
            id: Date.now(),
            ...data,
          });
        }}
      />
    </>
  );
}
