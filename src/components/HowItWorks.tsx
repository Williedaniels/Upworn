import React, { useState, useEffect, useRef } from 'react';
import step1Image from '../assets/Step1.png'; 
import step2Image from '../assets/Step2.png';
import step3Image from '../assets/Step3.png';
import step4Image from '../assets/Step4.png';

// Placeholder Icon Components
// You can replace these with more detailed SVGs or icon library components
const HomeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const HandHoldingHeartIcon: React.FC<{ className?: string }> = ({ className }) => (
  // Simplified to a heart icon for placeholder purposes
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const SafetyCollectionPlaceIcon: React.FC<{ className?: string }> = ({ className }) => (
  // Using a location pin as a placeholder
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const WorldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const phoneRef = useRef<HTMLDivElement>(null);
  
  const steps = [
    {
      id: 1,
      title: "Discover Donations",
      description: "Browse items people are giving away. Find clothes that match your style and get connected to the community.",
      phoneImage: step1Image,
      icon: HomeIcon,
    },
    {
      id: 2,
      title: "Give What You Don't Need",
      description: "Browse items people are giving away. Find clothes that match your style and get connected to the community.",
      phoneImage: step2Image,
      icon: HandHoldingHeartIcon,
    },
    {
      id: 3,
      title: "Connect with Donors",
      description: "Browse items people are giving away. Find clothes that match your style and get connected to the community.",
      phoneImage: step3Image,
      icon: SafetyCollectionPlaceIcon,
    },
    {
      id: 4,
      title: "Track Your Impact",
      description: "Browse items people are giving away. Find clothes that match your style and get connected to the community.",
      phoneImage: step4Image,
      icon: WorldIcon,
    }
  ];

  // Initialize refs array
  useEffect(() => {
    stepsRef.current = stepsRef.current.slice(0, steps.length);
  }, [steps.length]);

  // Scroll animation logic
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      
      // Only activate when section is in view
      if (sectionTop < windowHeight && sectionTop > -sectionHeight + 100) {
        // Calculate which step should be active based on scroll position
        const sectionProgress = Math.abs(sectionTop - windowHeight / 2) / (sectionHeight / 2);
        const normalizedProgress = Math.max(0, Math.min(1, sectionProgress));
        
        // Map progress to step index (0 to 3)
        const stepIndex = Math.min(
          steps.length - 1,
          Math.floor(normalizedProgress * steps.length)
        );
        
        if (stepIndex !== activeStep) {
          setActiveStep(stepIndex);
          
          // Add animation to phone
          if (phoneRef.current) {
            phoneRef.current.classList.add('transition-transform', 'duration-500');
            phoneRef.current.style.transform = 'translateY(-10px)';
            setTimeout(() => {
              if (phoneRef.current) {
                phoneRef.current.style.transform = 'translateY(0)';
              }
            }, 300);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep, steps.length]);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">HOW DOES THE APP WORK?</h2>
        
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Steps */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                ref={el => { stepsRef.current[index] = el; }}
                className={`flex mb-8 transition-all duration-500 ${
                  activeStep === index 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-50 transform -translate-x-4'
                }`}
              >
                <div className="mr-6 flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${
                    activeStep === index 
                      ? 'bg-green-700' // Darker green for active background
                      : 'bg-gray-200'
                  }`}>
                    <step.icon className={`h-6 w-6 ${
                      activeStep === index
                        ? 'text-white'
                        : 'text-green-800' // Darker green for inactive icon
                    }`} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-200"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl mb-2">
                    <strong className="font-bold">Step {step.id}:</strong>
                    <span className="font-bold"> {step.title}</span>
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right side - Phone mockup */}
          <div className="lg:w-1/2 flex justify-center sticky top-1/4">
            <div ref={phoneRef} className="relative max-w-[240px] w-full transition-all duration-700 rounded-lg overflow-hidden">
              {/* Phone content - Full size images */}
              <div className="relative">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`transition-opacity duration-500 ${
                      activeStep === index ? 'opacity-100 z-10' : 'opacity-0 z-0 absolute top-0 left-0 w-full'
                    }`}
                  >
                    {/* Display the phone image at full size */}
                    <img 
                      src={step.phoneImage} 
                      alt={`Step ${step.id} Screenshot`} 
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;