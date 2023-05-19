// Components.
import Tech from "./components/Tech";
import Travel from "./components/Travel";
import Trending from "./components/Trending";
import Other from "@/components/Other";
import Sidebar from "@/components/Sidebar";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <Trending />
      <div className="mb-5 gap-10 md:flex">
        <div className="basis-3/4">
          <Tech />
          <Travel />
          <Other />
          <div className="hidden md:block">
            {/* AD GOES HERE */}
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          {/* AD GOES HERE */}
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
