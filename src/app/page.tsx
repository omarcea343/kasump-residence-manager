import { Navbar } from "@/components/navbar";
import { Search } from "@/components/search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400">
      <div>
        <Navbar />
        <Search />
      </div>
    </main>
  );
}
