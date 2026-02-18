import ChartOne from "@/components/dashboard/ecommerce/ChartOne";
import ChartTwo from "@/components/dashboard/ecommerce/ChartTwo";
import ChatCard from "@/components/dashboard/ecommerce/ChatCard";
import StatCards from "@/components/dashboard/ecommerce/StatCards";
import TableOne from "@/components/dashboard/ecommerce/TableOne";

export default function EcommercePage() {
  return (
    <div className="mx-auto max-w-360 p-4 md:p-6 2xl:p-10">
      <StatCards />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-8 2xl:gap-8">
        <ChartOne />
        <ChartTwo />
        <TableOne />
        <ChatCard />
      </div>
    </div>
  );
}
