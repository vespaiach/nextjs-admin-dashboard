import { MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Chat() {
  return (
    <div className="dropdown dropdown-end">
      <button type="button" className="btn btn-ghost btn-circle btn-md bg-base-200">
        <div className="indicator">
          <MessageSquare size={18} />
          <span className="badge badge-error badge-xs indicator-item h-2.5 w-2.5 p-0 border-base-100"></span>
        </div>
      </button>
      <ul className="dropdown-content z-[1] mt-4 w-80 rounded-sm border border-base-200 bg-base-100 p-0 shadow-lg">
        <li className="border-b border-base-200 px-4.5 py-3">
          <h5 className="text-sm font-medium text-base-content/70 px-4 py-2">Messages</h5>
        </li>
        <div className="flex h-auto flex-col overflow-y-auto max-h-72">
          <li className="border-b border-base-200 last:border-0">
            <Link
              className="flex gap-4.5 px-4.5 py-3 hover:bg-base-200 px-4 py-3 items-center"
              href="#">
              <div className="h-12 w-12 rounded-full overflow-hidden shrink-0">
                <Image
                  width={38}
                  height={38}
                  src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&q=80"
                  alt="User"
                />
              </div>
              <div className="flex-1">
                <h6 className="text-sm font-medium">Mariya Desoja</h6>
                <p className="text-xs">I like your confidence 💪</p>
                <p className="text-xs mt-0.5">2min ago</p>
              </div>
            </Link>
          </li>
        </div>
        <li className="p-2 border-t border-base-200 text-center">
          <Link href="#" className="text-xs font-medium hover:underline inline-block">
            View all messages
          </Link>
        </li>
      </ul>
    </div>
  );
}
