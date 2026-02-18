import {
  ChevronDown,
  Link,
  LogOut,
  Settings,
  User as UserIcon,
} from "lucide-react";
import Image from "next/image";

export default function User() {
  return (
    <div className="dropdown dropdown-end">
      <button type="button" className="flex items-center gap-2 text-left">
        <span className="hidden text-right lg:block">
          <span className="block text-xs font-semibold">
            Musharof Chowdhury
          </span>
          <span className="block text-xs">Principal Designer</span>
        </span>

        <div className="avatar">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ring-0">
            <Image
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&q=80"
              alt="User"
              width={38}
              height={38}
            />
          </div>
        </div>

        <ChevronDown size={20} className="hidden sm:block" />
      </button>

      <ul className="dropdown-content menu z-1 mt-4 w-62 rounded-sm border border-base-200 bg-base-100 p-2 shadow-lg">
        <li>
          <Link
            href="/profile"
            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out">
            <UserIcon size={18} />
            My Profile
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out">
            <Settings size={18} />
            Account Settings
          </Link>
        </li>
        <div className="divider my-0"></div>
        <li>
          <Link
            href="/logout"
            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out text-error">
            <LogOut size={18} />
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
}
