import CameraFeed from "./CameraFeed";
import AlertsPanel from "./AlertsPanel";
import DetectedObjectsLog from "./DetectedObjectsLog";

export default function DashboardMock() {
  return (
    <div className="space-y-6">
      {/* Top row: Camera feed and alerts panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CameraFeed />
        </div>
        <div className="lg:col-span-1">
          <AlertsPanel />
        </div>
      </div>

      {/* Bottom: Detected objects log */}
      <div>
        <DetectedObjectsLog />
      </div>
    </div>
  );
}
