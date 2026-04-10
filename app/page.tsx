import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <Header />

      <div className="p-6 space-y-10">

        {/* Hero Section (NEW - important) */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl font-bold">
            Never Miss Important Moments 🎉
          </h1>
          <p className="text-muted-foreground">
            Smart reminders + AI gift suggestions for your loved ones
          </p>
        </section>

        {/* Upcoming Events */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Upcoming Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <EventCard
              title="Rahul's Birthday"
              subtitle="2 Days Left"
              action="View Suggestions →"
            />

            <EventCard
              title="Mom Anniversary"
              subtitle="5 Days Left"
              action="View Suggestions →"
            />

          </div>
        </section>

        {/* AI Suggestions */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            AI Gift Suggestions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <Card className="rounded-xl shadow-sm hover:shadow-md transition">
              <CardContent className="p-4">
                <h3 className="font-semibold">Gym Lover</h3>
                <p className="text-sm text-muted-foreground">
                  Suggested:{" "}
                  <span className="text-primary font-medium">
                    Smart Bottle
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-sm hover:shadow-md transition">
              <CardContent className="p-4">
                <h3 className="font-semibold">Doctor</h3>
                <p className="text-sm text-muted-foreground">
                  Suggested:{" "}
                  <span className="text-primary font-medium">
                    Custom Pen
                  </span>
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

      </div>
    </main>
  );
}