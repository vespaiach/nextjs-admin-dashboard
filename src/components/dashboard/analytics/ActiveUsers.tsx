export default function ActiveUsers() {
  return (
    <div className="dashboard-box col-span-12 p-6 xl:col-span-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xl font-semibold text-base-content">Active Users</h4>
        <span className="flex items-center gap-1 text-sm font-medium text-success">
          Live
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
          </span>
        </span>
      </div>
      <div className="text-4xl font-bold text-base-content mb-2">1,235</div>
      <p className="text-sm text-base-content/70 mb-6">Users currently on site</p>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Desktop</span>
            <span>65%</span>
          </div>
          <progress className="progress progress-primary w-full" value="65" max="100"></progress>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Mobile</span>
            <span>25%</span>
          </div>
          <progress className="progress progress-secondary w-full" value="25" max="100"></progress>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Tablet</span>
            <span>10%</span>
          </div>
          <progress className="progress progress-accent w-full" value="10" max="100"></progress>
        </div>
      </div>
    </div>
  );
}
