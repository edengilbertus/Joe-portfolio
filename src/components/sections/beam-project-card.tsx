import Image from "next/image";

export default function BeamProjectCard() {
  return (
    <div className="rounded-3xl bg-blue-100 p-8 lg:p-12 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Content Side */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-2">Beam</h3>
            <p className="text-lg text-gray-700">
              A modern collaboration platform for creative teams
            </p>
          </div>
          
          <div className="space-y-3">
            <div>
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Role</span>
              <p className="text-base">Product Designer</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Timeline</span>
              <p className="text-base">4 months</p>
            </div>
          </div>
        </div>

        {/* Browser Mockup Side */}
        <div className="relative">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Browser Chrome */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 flex items-center justify-center gap-2">
                <div className="text-xs text-gray-400">← →</div>
                <div className="bg-white rounded px-3 py-1 text-xs text-gray-500 flex-1 max-w-md">
                  🔒 beam.app
                </div>
              </div>
            </div>

            {/* Website Content */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 lg:p-12 min-h-[300px] flex items-center justify-center">
              <div className="text-center text-white space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Collaborate Better
                </h2>
                <p className="text-lg opacity-90">
                  Real-time collaboration for modern teams
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
