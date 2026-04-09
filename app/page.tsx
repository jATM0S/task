import NavCard from "./_components/nav-card";

export default function Home() {
  return (
    <main className="min-h-dvh p-8">
      <header className="mb-10">
        <p className="font-note mt-[24px] mb-[12px] text-[20px] font-medium text-[#333333]">
          Select a UI page to preview.
        </p>

        <h1 className="font-heading text-[36px] leading-[1.2] font-bold">
          <span className="text-accent">UI</span> Pages
        </h1>
      </header>

      <section className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        <NavCard
          href="/ui-1"
          title="UI Page 1"
          description="Navigate to the first UI screen."
        />
        <NavCard
          href="/ui-2"
          title="UI Page 2"
          description="Navigate to the second UI screen."
        />
      </section>
      <header className="mt-20 mb-10">
        <p className="font-note mt-[24px] mb-[12px] text-[20px] font-medium text-[#333333]">
          Navigate to the user page.
        </p>

        <h1 className="font-heading text-[36px] leading-[1.2] font-bold">
          <span className="text-accent">Task</span> Two
        </h1>
      </header>

      <section className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        <NavCard
          href="/users"
          title="User List"
          description="Navigate to the user list page."
        />
      </section>
    </main>
  );
}
