import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10 bg-gradient-to-r from-slate-200 to-gray-300">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Landing Page
      </h1>
      <Link href={"/login"}>
        <Button>Sign In</Button>
      </Link>
    </div>
  );
}
