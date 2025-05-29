import React from 'react';

const ClothesGrid: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">YOUR CLOTHES MAKE A DIFFERENCE</h2>
        
        <div className="mb-10">
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Every year, millions of clothing items are thrown away while people in refugee camps, orphanages, and low-income communities struggle with basic clothing needs. EcoThreads bridges that gap.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-lg group">
            {/* ADD CARD IMAGE HERE */}
            <div className="w-full h-80 bg-red-100 object-cover transition-transform duration-500 group-hover:scale-110">
              <div className="flex items-center justify-center h-full">
                <span className="text-red-700">Community Support Image</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Community Support</h3>
              <p className="text-sm text-white/80">Helping communities thrive through sustainable fashion initiatives</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-lg group">
            {/* ADD CARD IMAGE HERE */}
            <div className="w-full h-80 bg-blue-100 object-cover transition-transform duration-500 group-hover:scale-110">
              <div className="flex items-center justify-center h-full">
                <span className="text-blue-700">Clothing Donations Image</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Clothing Donations</h3>
              <p className="text-sm text-white/80">Your pre-loved clothes find new homes where they're needed most</p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-lg group">
            {/* ADD CARD IMAGE HERE */}
            <div className="w-full h-80 bg-green-100 object-cover transition-transform duration-500 group-hover:scale-110">
              <div className="flex items-center justify-center h-full">
                <span className="text-green-700">Sustainability Initiatives Image</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Sustainability Initiatives</h3>
              <p className="text-sm text-white/80">Reducing textile waste through innovative recycling programs</p>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="relative overflow-hidden rounded-lg group">
            {/* ADD CARD IMAGE HERE */}
            <div className="w-full h-80 bg-purple-100 object-cover transition-transform duration-500 group-hover:scale-110">
              <div className="flex items-center justify-center h-full">
                <span className="text-purple-700">Global Impact Image</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Global Impact</h3>
              <p className="text-sm text-white/80">Making a difference in communities around the world</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClothesGrid;
