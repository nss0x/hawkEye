import Card from "../common/Card";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "Person Detected",
    level: "info",
    time: "2 min ago",
    camera: "Front Entrance",
  },
  {
    id: 2,
    type: "Unusual Activity",
    level: "warning",
    time: "5 min ago",
    camera: "Parking Lot",
  },
  {
    id: 3,
    type: "Object Detected",
    level: "critical",
    time: "12 min ago",
    camera: "Warehouse A",
  },
];

export default function AlertsPanel() {
  return (
    <Card glass className="p-0 overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-white/5">
        <h3 className="font-semibold text-gray-100">Recent Alerts</h3>
      </div>

      {/* Alerts List */}
      <div className="flex-1 overflow-y-auto">
        {alerts.map((alert, index) => (
          <div
            key={alert.id}
            className={`p-4 border-b border-white/5 hover:bg-white/5 transition-colors ${
              index === 0 ? "" : ""
            }`}
          >
            <div className="flex items-start space-x-3">
              {/* Icon */}
              <div
                className={`mt-1 p-1.5 rounded ${
                  alert.level === "critical"
                    ? "bg-red-500/20 text-red-400"
                    : alert.level === "warning"
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-blue-500/20 text-blue-400"
                }`}
              >
                {alert.level === "critical" ? (
                  <AlertCircle className="w-4 h-4" />
                ) : (
                  <CheckCircle2 className="w-4 h-4" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-gray-100">
                  {alert.type}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{alert.camera}</p>
              </div>

              {/* Time */}
              <p className="text-xs text-gray-500 whitespace-nowrap">
                {alert.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-white/10 bg-white/5">
        <button className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors">
          View All Alerts →
        </button>
      </div>
    </Card>
  );
}
