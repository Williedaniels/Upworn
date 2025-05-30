import React from 'react';
import communityImage from '../assets/Community.png';
import upwornImage from '../assets/Upworn.png'; 
import homeImage from '../assets/Home.png'; 
import furnitureImage from '../assets/Furniture.png'; 


const ClothesGrid: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-lg group">
            <img 
              src={communityImage} 
              alt="Community Support" 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Community Support</h3>
              <p className="text-sm text-white/80">Helping communities thrive through sustainable fashion initiatives</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-lg group">
            <img 
              src={upwornImage} 
              alt="Clothing Donations" 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Clothing Donations</h3>
              <p className="text-sm text-white/80">Your pre-loved clothes find new homes where they're needed most</p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-lg group">
            <img 
              src={homeImage} 
              alt="Sustainability Initiatives" 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Sustainability Initiatives</h3>
              <p className="text-sm text-white/80">Reducing textile waste through innovative recycling programs</p>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="relative overflow-hidden rounded-lg group">
            <img 
              src={furnitureImage} 
              alt="Global Impact" 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
            />
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
