import StatCardSimple from "@/components/shares/StatCardSimple";

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-8">
      <StatCardSimple title="Unique Visitors" value="25.8K" rate="4.35%" isPositive={true} />
      <StatCardSimple title="Total Pageviews" value="54.2K" rate="2.59%" isPositive={true} />
      <StatCardSimple title="Session Duration" value="2m 35s" rate="0.95%" isPositive={false} />
      <StatCardSimple title="Bounce Rate" value="42.5%" rate="1.50%" isPositive={true} />
    </div>
  );
}
