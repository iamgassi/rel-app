export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text p-6">

      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-primary">
          RelApp
        </h1>

        <button className="bg-primary text-white px-4 py-2 rounded-[var(--radius-app)] hover:bg-primary-hover">
          + Add Person
        </button>
      </header>

      {/* Upcoming Events Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card */}
          <div className="bg-surface border border-border rounded-[var(--radius-app)] p-4 shadow-sm">
            <h3 className="font-semibold text-text">Rahul's Birthday</h3>
            <p className="text-sm text-text-secondary">2 Days Left</p>
            <button className="mt-3 bg-secondary text-white px-3 py-1 rounded-lg hover:opacity-90">
              View Suggestions
            </button>
          </div>

          {/* Card */}
          <div className="bg-surface border border-border rounded-[var(--radius-app)] p-4 shadow-sm">
            <h3 className="font-semibold text-text">Mom Anniversary</h3>
            <p className="text-sm text-text-secondary">5 Days Left</p>
            <button className="mt-3 bg-secondary text-white px-3 py-1 rounded-lg hover:opacity-90">
              View Suggestions
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

          <div className="bg-surface border border-border rounded-[var(--radius-app)] p-4 shadow-sm">
            <h3 className="font-semibold text-text">Gym Lover</h3>
            <p className="text-sm text-text-secondary">
              Suggested: <span className="text-accent font-medium">Smart Bottle</span>
            </p>
          </div>

          <div className="bg-surface border border-border rounded-[var(--radius-app)] p-4 shadow-sm">
            <h3 className="font-semibold text-text">Doctor</h3>
            <p className="text-sm text-text-secondary">
              Suggested: <span className="text-accent font-medium">Custom Pen</span>
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}