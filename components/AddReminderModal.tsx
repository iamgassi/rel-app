"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Calendar } from "@/components/ui/calendar";

export default function AddReminderModal({ onAdd }: any) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState<Date | undefined>();

  const handleSubmit = () => {
    if (!name || !date) return;

    onAdd({
      id: Date.now(),
      name,
      relation,
      occasion,
      date,
    });

    // reset
    setName("");
    setRelation("");
    setOccasion("");
    setDate(undefined);

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-xl">+ Add Reminder</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Reminder</DialogTitle>
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

          <Input
            placeholder="Occasion (Birthday, Anniversary)"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          />

          <div>
            <p className="text-sm mb-2 text-muted-foreground">
              Select Date
            </p>

            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
            />
          </div>

          <Button onClick={handleSubmit} className="w-full">
            Save Reminder
          </Button>

        </div>
      </DialogContent>
    </Dialog>
  );
}