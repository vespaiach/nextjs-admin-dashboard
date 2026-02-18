import { Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function SupportGroup() {
  return (
    <div>
      <h2 className="mb-2 text-xs font-semibold tracking-widest text-base-content/50 uppercase">
        SUPPORT
      </h2>
      <ul className="menu menu-md w-full p-0">
        <li>
          <Link href="/messages">
            <MessageSquare size={20} />
            Messages
            <span className="badge badge-sm badge-primary">5</span>
          </Link>
        </li>
        <li>
          <Link href="/inbox">
            <Mail size={20} />
            Inbox
          </Link>
        </li>
      </ul>
    </div>
  );
}
