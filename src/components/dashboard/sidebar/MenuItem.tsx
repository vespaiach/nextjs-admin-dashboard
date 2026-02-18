"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function MenuItem({
  href,
  label,
  icon,
  badge,
}: {
  href: string;
  label: string;
  icon?: ReactNode;
  badge?: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <li className={pathname === href ? "menu-active rounded" : undefined}>
      <Link href={href}>
        {icon}
        {label}
        {badge}
      </Link>
    </li>
  );
}
