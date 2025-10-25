import Image from "next/image";

export default function HerralinkProjectCard() {
  return (
    <div className="rounded-3xl bg-yellow-300 p-8 lg:p-12 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Content Side */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-2">Herralink</h3>
            <p className="text-lg text-gray-700">
              A volunteer platform connecting communities with Goodwin Living
            </p>
          </div>
          
          <div className="space-y-3">
            <div>
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Role</span>
              <p className="text-base">UI/UX Designer</p>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Timeline</span>
              <p className="text-base">6 months</p>
            </div>
          </div>
        </div>

        {/* Browser Mockup Side */}
        <div className="relative">
          {/* Browser Window */}
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
                  🔒 herralink.com
                </div>
              </div>
            </div>

            {/* Website Content */}
            <div className="bg-green-600 p-8 lg:p-12 min-h-[300px] flex flex-col justify-center">
              <div className="space-y-6 text-white">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  More than volunteers
                </h2>
                <p className="text-lg opacity-90">
                  At Herralink we're more than volunteers,<br />
                  <span className="italic">we're friends.</span>
                </p>
                <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                  Become a HerraHelper
                </button>
              </div>
              
              {/* Decorative illustration placeholder */}
              <div className="absolute bottom-8 right-8 w-32 h-32 opacity-20">
                <div className="text-white text-8xl">👥</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
