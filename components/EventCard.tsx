import { Card, CardContent } from "@/components/ui/card";

export default function EventCard({
  title,
  subtitle,
  action,
}: any) {
  return (
    <Card className="rounded-xl shadow-sm hover:shadow-md transition">
      <CardContent className="p-4 flex justify-between items-center">
        
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {action && (
          <button className="text-sm text-primary">
            {action}
          </button>
        )}

      </CardContent>
    </Card>
  );
}