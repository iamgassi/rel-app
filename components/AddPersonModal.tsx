"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function AddPersonModal() {
  const [form, setForm] = useState({
    name: "",
    relation: "",
    occasion: "",
    date: "",
    interest: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", form);
    alert("Person Added (check console)");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-xl shadow-sm">
          + Add Person
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add a Person</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">

          {/* Name */}
          <div className="grid gap-2">
            <Label>Name</Label>
            <Input
              placeholder="Enter name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          {/* Relation */}
          <div className="grid gap-2">
            <Label>Relation</Label>
            <Select onValueChange={(val) => handleChange("relation", val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select relation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="friend">Friend</SelectItem>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="colleague">Colleague</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Occasion */}
          <div className="grid gap-2">
            <Label>Occasion</Label>
            <Select onValueChange={(val) => handleChange("occasion", val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select occasion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="birthday">Birthday</SelectItem>
                <SelectItem value="anniversary">Anniversary</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date */}
          <div className="grid gap-2">
            <Label>Date</Label>
            <Input
              type="date"
              value={form.date}
              onChange={(e) => handleChange("date", e.target.value)}
            />
          </div>

          {/* Interest */}
          <div className="grid gap-2">
            <Label>Interest</Label>
            <Input
              placeholder="e.g. gym, tech, fashion"
              value={form.interest}
              onChange={(e) => handleChange("interest", e.target.value)}
            />
          </div>

          {/* Submit */}
          <Button onClick={handleSubmit}>
            Save
          </Button>

        </div>
      </DialogContent>
    </Dialog>
  );
}