import { Bell } from "lucide-react";
import Link from "next/link";

export default function Notification() {
  return (
    <div className="dropdown dropdown-end">
      <button type="button" className="btn btn-ghost btn-circle btn-md bg-base-200">
        <div className="indicator">
          <Bell size={18} />
          <span className="badge badge-error badge-xs indicator-item h-2.5 w-2.5 p-0 border-base-100"></span>
        </div>
      </button>
      <ul className="dropdown-content z-1 mt-4 w-80 rounded-sm border border-base-200 bg-base-100 p-0 shadow-lg">
        <li className="border-b border-base-200 px-4.5 py-3">
          <h5 className="text-sm font-medium text-base-content/70 px-4 py-2">Notification</h5>
        </li>
        <div className="flex h-auto flex-col overflow-y-auto max-h-72">
          <li className="border-b border-base-200 last:border-0">
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-base-200 px-4 py-3"
              href="#">
              <p className="text-sm">
                <span className="text-base-content font-medium">
                  Edit your information in a swipe
                </span>{" "}
                Sunt in culpa qui officia deserunt mollit anim.
              </p>
              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li className="border-b border-base-200 last:border-0">
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-base-200 px-4 py-3"
              href="#">
              <p className="text-sm">
                <span className="text-base-content font-medium">It is a long established fact</span>{" "}
                that a reader will be distracted by the readable.
              </p>
              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
        </div>
        <li className="p-2 border-t border-base-200 text-center">
          <Link href="#" className="text-xs font-medium hover:underline inline-block">
            View all notifications
          </Link>
        </li>
      </ul>
    </div>
  );
}
