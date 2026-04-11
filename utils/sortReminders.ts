import { Reminder } from "@/hooks/useReminders";

export function sortReminders(reminders: Reminder[]) {
  return [...reminders].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );
}