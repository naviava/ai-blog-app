// React and Next.
import Link from "next/link";

// Components.
import TitleBanner from "./TitleBanner";
import SocialLinks from "@/components/SocialLinks";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <header className="mb-5">
      <nav className="flex w-full items-center justify-between bg-wh-900 px-10 py-4 text-wh-10">
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
        <div className="flex justify-between gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </div>
        <div>
          <p>Sign In</p>
        </div>
      </nav>
      <TitleBanner />
      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;
