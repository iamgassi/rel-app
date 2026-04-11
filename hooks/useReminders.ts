"use client";

import { useEffect, useState } from "react";

export interface Reminder {
  id: number;
  name: string;
  relation: string;
  occasion: string;
  date: Date;
  notes: string;
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
        notes: typeof r.notes === "string" ? r.notes : "",
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

  const deleteReminder = (id: number) => {
    setReminders((prev) => {
        const updated = prev.filter((r) => r.id !== id);
        localStorage.setItem("reminders", JSON.stringify(updated));
        return updated;
    });
  };

  const updateReminder = (id: number, next: Omit<Reminder, "id">) => {
    setReminders((prev) => {
      const updated = prev.map((r) =>
        r.id === id ? { ...next, id } : r
      );
      saveToStorage(updated);
      return updated;
    });
  };

  return { reminders, addReminder, deleteReminder, updateReminder };
}