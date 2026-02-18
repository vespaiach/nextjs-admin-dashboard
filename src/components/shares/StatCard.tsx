import { ArrowDown, ArrowUp } from "lucide-react";
import type React from "react";
import { cn } from "@/utilities/ui";

interface StatCardProps {
  title: string;
  value: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function StatCard({
  title,
  value,
  rate,
  levelUp,
  levelDown,
  children,
  className
}: StatCardProps) {
  return (
    <div className={cn("dashboard-box", className)}>
      <div>
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-2xl font-bold text-base-content">{value}</h4>
          <span className="text-sm font-medium text-base-content">{title}</span>
        </div>

        <span
          className={cn(
            "flex items-center gap-1 text-sm font-medium",
            levelUp ? "text-success" : levelDown ? "text-error" : "",
          )}>
          {rate}
          {levelUp && <ArrowUp size={16} />}
          {levelDown && <ArrowDown size={16} />}
        </span>
      </div>
    </div>
  );
}
