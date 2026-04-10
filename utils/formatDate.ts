export function formatDate(date: Date) {
  const today = new Date();

  const diff = Math.ceil(
    (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  if (diff > 1) return `In ${diff} days`;

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });
}