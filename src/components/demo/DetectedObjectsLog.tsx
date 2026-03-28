import Card from "../common/Card";

const detectedObjects = [
  {
    id: 1,
    object: "Person",
    confidence: "98%",
    timestamp: "14:32:21",
    camera: "Front Door",
  },
  {
    id: 2,
    object: "Vehicle",
    confidence: "95%",
    timestamp: "14:31:45",
    camera: "Parking Lot",
  },
  {
    id: 3,
    object: "License Plate",
    confidence: "92%",
    timestamp: "14:31:12",
    camera: "Gate",
  },
  {
    id: 4,
    object: "Backpack",
    confidence: "87%",
    timestamp: "14:30:56",
    camera: "Warehouse",
  },
];

export default function DetectedObjectsLog() {
  return (
    <Card glass className="p-0 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-white/5">
        <h3 className="font-semibold text-gray-100">Detected Objects</h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Object
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Confidence
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Time
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Camera
              </th>
            </tr>
          </thead>
          <tbody>
            {detectedObjects.map((obj) => (
              <tr
                key={obj.id}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="px-4 py-3 text-gray-100">{obj.object}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <div className="h-1.5 w-8 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                        style={{
                          width: obj.confidence,
                        }}
                      />
                    </div>
                    <span className="text-gray-400">{obj.confidence}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-400">{obj.timestamp}</td>
                <td className="px-4 py-3 text-gray-400 text-xs">{obj.camera}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
