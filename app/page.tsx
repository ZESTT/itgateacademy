import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Index from "@/components/main/content";
import Her from"@/components/main/ProjectsSection"
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-2">
        <Hero />
        <Index/>
        <Encryption />
        <Her/>
      </div>
    </main>
  );
}
