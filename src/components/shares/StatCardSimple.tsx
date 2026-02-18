import { cn } from "@/utilities/ui";

interface StatCardSimpleProps {
  title: string;
  value: string;
  rate: string;
  period?: string;
  isPositive?: boolean;
  className?: string;
}

export default function StatCardSimple({
  title,
  value,
  rate,
  period = "Vs last month",
  isPositive = true,
  className,
}: StatCardSimpleProps) {
  return (
    <div className={cn("dashboard-box p-5", className)}>
      <p className="text-sm text-base-content/60">{title}</p>

      <div className="mt-3 flex items-end justify-between">
        <div>
          <h4 className="text-2xl font-bold text-base-content">{value}</h4>
        </div>

        <div className="flex items-center gap-1">
          <span
            className={cn(
              "flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
              isPositive ? "bg-success/15 text-success" : "bg-error/15 text-error",
            )}>
            {isPositive ? "+" : "-"}
            {rate}
          </span>

          <span className="text-xs text-base-content/60">{period}</span>
        </div>
      </div>
    </div>
  );
}
