"use client";

import { Mail, MessageSquare } from "lucide-react";
import MenuItem from "./MenuItem";

export default function SupportGroup() {
  return (
    <div>
      <h2 className="mb-2 text-xs font-semibold tracking-widest text-base-content/50 uppercase">
        SUPPORT
      </h2>
      <ul className="menu menu-md w-full p-0">
        <MenuItem
          href="/messages"
          label="Messages"
          icon={<MessageSquare size={20} />}
          badge={<span className="badge badge-sm badge-primary">5</span>}
        />
        <MenuItem href="/inbox" label="Inbox" icon={<Mail size={20} />} />
      </ul>
    </div>
  );
}
