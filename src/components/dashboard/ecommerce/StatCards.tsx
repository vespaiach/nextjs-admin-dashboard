import { Eye, ShoppingBag, ShoppingCart, Users } from "lucide-react";
import StatCard from "@/components/shares/StatCard";

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-8">
      <StatCard title="Total views" value="$3.456K" rate="0.43%" levelUp>
        <div className="bg-base-300 rounded-md w-12 h-12 flex items-center justify-center">
          <Eye className="text-base-content" size={22} />
        </div>
      </StatCard>
      <StatCard title="Total Profit" value="$45.2K" rate="4.35%" levelUp>
        <div className="bg-base-300 rounded-md w-12 h-12 flex items-center justify-center">
          <ShoppingCart className="text-base-content" size={22} />
        </div>
      </StatCard>
      <StatCard title="Total Product" value="2.450" rate="2.59%" levelUp>
        <div className="bg-base-300 rounded-md w-12 h-12 flex items-center justify-center">
          <ShoppingBag className="text-base-content" size={22} />
        </div>
      </StatCard>
      <StatCard title="Total Users" value="3.456" rate="0.95%" levelDown>
        <div className="bg-base-300 rounded-md w-12 h-12 flex items-center justify-center">
          <Users className="text-base-content" size={22} />
        </div>
      </StatCard>
    </div>
  );
}
