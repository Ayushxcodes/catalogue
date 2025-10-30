import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/Global/Nav-menu";
import { NavigationSheet } from "@/components/Global/Navigation-sheet";

const Navbar04Page = () => {
  return (
    <div className="relative z-50">
      <nav className="absolute top-6 inset-x-4 h-16 bg-background/90 backdrop-blur-md border dark:border-slate-700/70 max-w-[1280px] mx-auto rounded-full shadow-md">
        <div className="h-full flex items-center justify-between px-4">
          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            {/* Contact Me Button */}
            <Link href="/contact">
              <Button
                variant="outline"
                className="hidden sm:inline-flex rounded-full"
              >
                Contact Me
              </Button>
            </Link>

            {/* Hire Me Button */}
            <Link href="/contact">
              <Button className="rounded-full">Hire Me</Button>
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar04Page;
