import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display font-bold text-8xl text-primary mb-4">404</h1>
        <p className="text-zinc-400 text-xl mb-8">Page not found</p>
        <Link href="/" className="text-primary hover:underline font-mono uppercase tracking-wider">
          Go Home
        </Link>
      </div>
    </div>
  );
}
