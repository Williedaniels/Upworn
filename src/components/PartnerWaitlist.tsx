import React from 'react';

const PartnerWaitlist: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">Become an Upworn Partner or Join the Waitlist</h2>
        
        <div className="mb-10">
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Are you a business, organization, or community group interested in hosting collection points or supporting our mission? Join our network of partners making sustainable fashion accessible to all.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <div className="w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full md:w-80 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button className="w-full md:w-auto bg-green-700 text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition-colors">
            Submit
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex -space-x-2">
            {/* ADD PARTNER AVATAR IMAGES HERE */}
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
          </div>
          <span className="ml-3 text-sm text-gray-500">Join 200 others waiting in line</span>
        </div>
      </div>
    </section>
  );
};

export default PartnerWaitlist;
