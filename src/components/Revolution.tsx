import React from 'react';
import footerImage from '../assets/FooterImage.png'; // Assuming FooterImage.png is in src/assets/

const Revolution: React.FC = () => {
  return (
    <section className="bg-green-700 text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Revolution?</h2>
            <p className="mb-8">
              Download the Upworn app today and start making a difference. Join thousands of users who are already part of the sustainable fashion movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#app-store" className="bg-white text-green-700 px-6 py-3 rounded-full font-medium flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </a>
              <a href="#google-play" className="bg-white text-green-700 px-6 py-3 rounded-full font-medium flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5S3 21.33 3 20.5zM16.5 12L8.7 19.8c-.62.62-1.7.18-1.7-.7v-14.2c0-.88 1.08-1.32 1.7-.7L16.5 12z"/>
                </svg>
                Get it on Google Play
              </a>
            </div>
          </div>
          
          {/* Right side - Footer image */}
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src={footerImage} 
              alt="Footer Image" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Revolution;
