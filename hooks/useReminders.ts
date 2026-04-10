"use client";

import { useEffect, useState } from "react";

export interface Reminder {
  id: number;
  name: string;
  relation: string;
  occasion: string;
  date: Date;
}

export function useReminders() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  // Load once
  useEffect(() => {
    const stored = localStorage.getItem("reminders");

    if (stored) {
      const parsed = JSON.parse(stored).map((r: any) => ({
        ...r,
        date: new Date(r.date),
      }));
      setReminders(parsed);
    }
  }, []);

  const saveToStorage = (data: Reminder[]) => {
    localStorage.setItem("reminders", JSON.stringify(data));
  };

  const addReminder = (reminder: Reminder) => {
    setReminders((prev) => {
      const updated = [...prev, reminder];
      saveToStorage(updated); // ✅ save only here
      return updated;
    });
  };

  return { reminders, addReminder };
}