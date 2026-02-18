export default function TopChannels() {
  const channels = [
    { name: "Google", visitors: "3.5K", revenues: "$5,768", sales: 590, conversion: "4.8%" },
    { name: "Facebook", visitors: "2.2K", revenues: "$4,635", sales: 467, conversion: "4.3%" },
    { name: "Github", visitors: "2.1K", revenues: "$4,290", sales: 420, conversion: "3.7%" },
    { name: "Direct", visitors: "1.5K", revenues: "$3,580", sales: 389, conversion: "2.5%" },
    { name: "Other", visitors: "1.2K", revenues: "$2,740", sales: 230, conversion: "1.9%" },
  ];

  return (
    <div className="dashboard-box col-span-12 xl:col-span-7">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-base-content">Top Channels</h4>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-md">
          <thead>
            <tr className="bg-base-200">
              <th>Source</th>
              <th>Visitors</th>
              <th>Revenues</th>
              <th>Sales</th>
              <th>Conversion</th>
            </tr>
          </thead>
          <tbody>
            {channels.map((channel) => (
              <tr key={channel.name}>
                <td className="font-medium text-base-content">{channel.name}</td>
                <td>{channel.visitors}</td>
                <td className="text-success">{channel.revenues}</td>
                <td>{channel.sales}</td>
                <td className="text-primary">{channel.conversion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
