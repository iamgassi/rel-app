"use client";

import { useState } from "react";

export interface Reminder {
  id: number;
  name: string;
  relation: string;
  occasion: string;
  date: Date;
}

export function useReminders() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const addReminder = (reminder: Reminder) => {
    setReminders((prev) => [...prev, reminder]);
  };

  return { reminders, addReminder };
}