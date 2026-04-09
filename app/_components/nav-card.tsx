import Link from "next/link";

type NavCardProps = {
  href: string;
  title: string;
  description?: string;
};

export default function NavCard({ href, title, description }: NavCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[18px] font-semibold text-[#111111]">{title}</p>
        <span className="text-accent transition group-hover:translate-x-0.5">
          →
        </span>
      </div>

      <p className="text-[14px] text-[#555555]">{description}</p>
    </Link>
  );
}
