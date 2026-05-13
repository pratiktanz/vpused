import React from 'react';

const Homepage = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-50 min-h-screen">
      
      {/* 1. GLOBAL NAVIGATION */}
      <nav className="bg-[#0D1B2A] text-white py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter">AutoTrust</div>
        <ul className="hidden md:flex space-x-6 font-medium text-sm">
          <li className="cursor-pointer hover:text-blue-300">Buy Cars</li>
          <li className="cursor-pointer hover:text-blue-300">Sell Your Car</li>
          <li className="cursor-pointer hover:text-blue-300">The 300-Point Inspection</li>
          <li className="cursor-pointer hover:text-blue-300">Warranty & Care</li>
          <li className="cursor-pointer hover:text-blue-300">Contact</li>
        </ul>
        <button className="md:hidden text-white">Menu</button>
      </nav>

      {/* 2. HERO HEADER (Above the Fold) */}
      <header className="relative bg-[#0D1B2A] text-white py-24 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden">
        {/* Placeholder for the high-quality premium car background image */}
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('/api/placeholder/1200/600')" }}></div>
        
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Drive with Absolute Confidence.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 font-light">
            Every car is backed by a 300-point inspection, a 1-year warranty, and free monthly cleaning.
          </p>

          {/* SEARCH WIDGET */}
          <div className="bg-white p-4 rounded-lg shadow-2xl flex flex-col md:flex-row gap-3 w-full max-w-4xl mx-auto">
            <select className="flex-1 bg-gray-100 text-gray-800 p-3 rounded-md border-none focus:ring-2 focus:ring-blue-500 font-mono text-sm">
              <option>Any Make</option>
              <option>Toyota</option>
              <option>BMW</option>
            </select>
            <select className="flex-1 bg-gray-100 text-gray-800 p-3 rounded-md border-none focus:ring-2 focus:ring-blue-500 font-mono text-sm">
              <option>Any Model</option>
            </select>
            <select className="flex-1 bg-gray-100 text-gray-800 p-3 rounded-md border-none focus:ring-2 focus:ring-blue-500 font-mono text-sm">
              <option>Budget</option>
              <option>Under $20k</option>
              <option>$20k - $40k</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors">
              Search Inventory
            </button>
          </div>
        </div>
      </header>

      {/* 3. THE "TRIPLE GUARANTEE" GRID */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Why Buy From Us?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
              🔍
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0D1B2A]">300-Point Certified</h3>
            <p className="text-gray-600">
              We inspect everything from the engine mounts to the seat stitching.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
              🛡️
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0D1B2A]">1-Year Warranty</h3>
            <p className="text-gray-600">
              Comprehensive coverage. If it breaks, we fix it—zero cost to you.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
              ✨
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0D1B2A]">Free Monthly Cleaning</h3>
            <p className="text-gray-600">
              A professional deep-clean every 30 days to keep that 'new car' feeling.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Homepage;
