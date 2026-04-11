import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";

export default function EventCard({
  name,
  occasion,
  date,
  notes,
  onEdit,
  onDelete,
  action,
}: {
  name: string;
  occasion: string;
  date: string;
  notes?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  action?: ReactNode;
}) {
  return (
    <Card className="rounded-xl shadow-sm hover:shadow-md transition">
      <CardContent className="p-4 flex justify-between items-center">
        
        <div>
          <h3 className="font-semibold">
            {name} - {occasion}
          </h3>

          <p className="text-sm text-muted-foreground">
            {date}
          </p>

          {notes?.trim() ? (
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {notes.trim()}
            </p>
          ) : null}

          {action != null ? (
            <div className="mt-2 text-sm font-medium text-primary">
              {action}
            </div>
          ) : null}
        </div>

        {(onEdit || onDelete) && (
          <div className="flex items-center gap-1 shrink-0">
            {onEdit && (
              <button
                type="button"
                onClick={onEdit}
                className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label="Edit reminder"
              >
                <Pencil className="h-4 w-4" />
              </button>
            )}
            {onDelete && (
              <button
                type="button"
                onClick={onDelete}
                className="rounded-md p-1.5 text-red-500 hover:bg-red-500/10 hover:text-red-600"
                aria-label="Delete reminder"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            )}
          </div>
        )}

      </CardContent>
    </Card>
  );
}