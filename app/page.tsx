import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <Header />

      <div className="p-6">

        {/* Upcoming Events Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">
            Upcoming Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Card */}
            <div className="bg-card border rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold">Rahul's Birthday</h3>
              <p className="text-sm text-muted-foreground">2 Days Left</p>
              <button className="mt-3 text-sm text-primary">
                View Suggestions →
              </button>
            </div>

            {/* Card */}
            <div className="bg-card border rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold">Mom Anniversary</h3>
              <p className="text-sm text-muted-foreground">5 Days Left</p>
              <button className="mt-3 text-sm text-primary">
                View Suggestions →
              </button>
            </div>

          </div>
        </section>

        {/* AI Suggestions */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            AI Gift Suggestions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-card border rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold">Gym Lover</h3>
              <p className="text-sm text-muted-foreground">
                Suggested:{" "}
                <span className="text-primary font-medium">
                  Smart Bottle
                </span>
              </p>
            </div>

            <div className="bg-card border rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold">Doctor</h3>
              <p className="text-sm text-muted-foreground">
                Suggested:{" "}
                <span className="text-primary font-medium">
                  Custom Pen
                </span>
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}