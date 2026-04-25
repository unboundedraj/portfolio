import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#101010] px-6 text-center text-zinc-200">
      <h1 className="text-4xl font-bold text-white">404</h1>
      <p className="max-w-md text-sm text-zinc-400">This page does not exist.</p>
      <Link
        href="/"
        className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium text-white transition hover:border-zinc-500"
      >
        Back home
      </Link>
    </div>
  );
}
