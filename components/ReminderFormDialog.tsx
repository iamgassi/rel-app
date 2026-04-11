"use client";

import { useLayoutEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar } from "@/components/ui/calendar";

import type { Reminder } from "@/hooks/useReminders";
import {
  OCCASION_PRESETS,
  type OccasionPreset,
  occasionStringToPreset,
} from "@/utils/occasionPreset";

export type ReminderFields = Omit<Reminder, "id">;

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialReminder: Reminder | null;
  onCreate?: (data: ReminderFields) => void;
  onUpdate?: (id: number, data: ReminderFields) => void;
};

export default function ReminderFormDialog({
  open,
  onOpenChange,
  initialReminder,
  onCreate,
  onUpdate,
}: Props) {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [occasionPreset, setOccasionPreset] =
    useState<OccasionPreset>("Birthday");
  const [customOccasion, setCustomOccasion] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState<Date | undefined>();

  useLayoutEffect(() => {
    if (!open) return;

    if (initialReminder) {
      setName(initialReminder.name);
      setRelation(initialReminder.relation);
      const { preset, custom } = occasionStringToPreset(
        initialReminder.occasion
      );
      setOccasionPreset(preset);
      setCustomOccasion(custom);
      setNotes(initialReminder.notes);
      setDate(new Date(initialReminder.date));
    } else {
      setName("");
      setRelation("");
      setOccasionPreset("Birthday");
      setCustomOccasion("");
      setNotes("");
      setDate(undefined);
    }
  }, [open, initialReminder]);

  const resolvedOccasion =
    occasionPreset === "Custom"
      ? customOccasion.trim()
      : occasionPreset;

  const handleSubmit = () => {
    if (!name || !date) return;
    if (occasionPreset === "Custom" && !resolvedOccasion) return;

    const data: ReminderFields = {
      name,
      relation,
      occasion: resolvedOccasion,
      date,
      notes: notes.trim(),
    };

    if (initialReminder) {
      onUpdate?.(initialReminder.id, data);
    } else {
      onCreate?.(data);
    }

    onOpenChange(false);
  };

  const isEdit = initialReminder != null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEdit ? "Edit Reminder" : "Add Reminder"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="Relation (Mom, Friend)"
            value={relation}
            onChange={(e) => setRelation(e.target.value)}
          />

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Occasion</p>
            <Select
              value={occasionPreset}
              onValueChange={(v) => setOccasionPreset(v as OccasionPreset)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select occasion" />
              </SelectTrigger>
              <SelectContent>
                {OCCASION_PRESETS.map((o) => (
                  <SelectItem key={o} value={o}>
                    {o}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {occasionPreset === "Custom" ? (
              <Input
                placeholder="Describe the occasion"
                value={customOccasion}
                onChange={(e) => setCustomOccasion(e.target.value)}
              />
            ) : null}
          </div>

          <Textarea
            placeholder="Notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
          />

          <div>
            <p className="text-sm mb-2 text-muted-foreground">
              Select Date
            </p>

            <Calendar
              key={`${initialReminder?.id ?? "new"}-${open}`}
              mode="single"
              selected={date}
              onSelect={setDate}
              defaultMonth={date ?? new Date()}
            />
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full"
            disabled={
              !name ||
              !date ||
              (occasionPreset === "Custom" && !customOccasion.trim())
            }
          >
            {isEdit ? "Save changes" : "Save Reminder"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
