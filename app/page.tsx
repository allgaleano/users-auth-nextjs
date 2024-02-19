import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-background space-y-4">
      <h1 className="text-2xl font-semibold">
        Home
      </h1>
      <Link
        href="/auth/login"
      >
        <Button>
          SignIn
        </Button>
      </Link>
    </main>
  );
}
