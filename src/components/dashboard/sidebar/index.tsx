import { Zap } from "lucide-react";
import Link from "next/link";
import MenuGroup from "./MenuGroup";
import OtherGroup from "./OtherGroup";
import SupportGroup from "./SupportGroup";

export default function Sidebar() {
  return (
    <div className="py-4 px-4 w-70 md:w-72 min-h-full bg-base-100 text-base-content border-r border-base-300 overflow-y-auto">
      <div className="mb-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
          <div className="bg-primary text-primary-content p-1 rounded-lg">
            <Zap size={24} fill="currentColor" />
          </div>
          <span>Admin</span>
        </Link>
      </div>

      <nav className="flex flex-col gap-5">
        <MenuGroup />

        <SupportGroup />

        <OtherGroup />
      </nav>
    </div>
  );
}
