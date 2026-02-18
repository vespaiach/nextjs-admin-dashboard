import { Menu } from "lucide-react";
import Link from "next/link";
import Chat from "./Chat";
import DarkModeControl from "./DarkModeControl";
import Notification from "./Notification";
import SearchForm from "./SearchForm";
import User from "./User";

export default function Header() {
  return (
    <header className="navbar sticky top-0 z-30 flex w-full bg-base-100 border-b border-base-300 transition-all duration-300">
      <div className="flex flex-grow items-center justify-between px-4 md:px-2 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <label
            htmlFor="sidebar-toggler"
            className="btn btn-ghost btn-sm btn-square lg:hidden">
            <Menu size={20} />
          </label>
          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <div className="bg-primary text-primary-content p-1 rounded-lg">
              <span className="font-bold text-xl px-1">A</span>
            </div>
          </Link>
        </div>

        <SearchForm />

        <div className="flex items-center gap-3 2xsm:gap-7">
          <div className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeControl />
            <Notification />
            <Chat />
          </div>
          <User />
        </div>
      </div>
    </header>
  );
}
