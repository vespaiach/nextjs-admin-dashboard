export default function TopPages() {
  const pages = [
    { url: "/dashboard/ecommerce", views: "2.5K", unique: "2.1K", bounce: "18%", time: "2m 15s" },
    { url: "/dashboard/analytics", views: "1.8K", unique: "1.4K", bounce: "12%", time: "3m 45s" },
    { url: "/dashboard/marketing", views: "1.2K", unique: "980", bounce: "25%", time: "1m 30s" },
    { url: "/dashboard/crm", views: "850", unique: "700", bounce: "30%", time: "1m 10s" },
    { url: "/dashboard/stocks", views: "640", unique: "520", bounce: "22%", time: "2m 05s" },
  ];

  return (
    <div className="dashboard-box col-span-12 xl:col-span-5">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-base-content">Top Pages</h4>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-md">
          <thead>
            <tr className="bg-base-200">
              <th>Page Path</th>
              <th>Views</th>
              <th>Unique</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page.url}>
                <td className="font-medium text-base-content text-sm">{page.url}</td>
                <td>{page.views}</td>
                <td>{page.unique}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 text-center">
        <button type="button" className="btn btn-ghost btn-sm">
          View All
        </button>
      </div>
    </div>
  );
}
