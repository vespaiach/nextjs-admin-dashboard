import AcquisitionChannels from "@/components/dashboard/analytics/AcquisitionChannels";
import ActiveUsers from "@/components/dashboard/analytics/ActiveUsers";
import SessionsByDevice from "@/components/dashboard/analytics/SessionsByDevice";
import StatCards from "@/components/dashboard/analytics/StatCards";
import TopChannels from "@/components/dashboard/analytics/TopChannels";
import TopPages from "@/components/dashboard/analytics/TopPages";
import VisitorAnalyticsBar from "@/components/dashboard/analytics/VisitorAnalyticsBar";

export default function AnalyticsPage() {
  return (
    <div className="mx-auto max-w-360 p-4 md:p-6 2xl:p-10">
      <StatCards />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-8 2xl:gap-8">
        <VisitorAnalyticsBar />
        <ActiveUsers />

        <AcquisitionChannels />
        <SessionsByDevice />

        <TopChannels />
        <TopPages />
      </div>
    </div>
  );
}
