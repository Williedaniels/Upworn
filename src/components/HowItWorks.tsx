import React, { useState, useEffect, useRef } from 'react';

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
      phoneImage: "step1_phone.png" // Replace with actual image path
    },
    {
      id: 2,
      title: "Find What You Don't Need",
      description: "Browse items people are giving away. Find clothes that match your style and get connected to the community.",
      phoneImage: "step2_phone.png" // Replace with actual image path
    },
    {
      id: 3,
      title: "Connect with Donors",
      description: "Browse items people are giving away. Find clothes that match your style and get connected to the community.",
      phoneImage: "step3_phone.png" // Replace with actual image path
    },
    {
      id: 4,
      title: "Track Your Impact",
      description: "Browse items people are giving away. Find clothes that match your style and get connected to the community.",
      phoneImage: "step4_phone.png" // Replace with actual image path
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
                ref={el => stepsRef.current[index] = el}
                className={`flex mb-8 transition-all duration-500 ${
                  activeStep === index 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-50 transform -translate-x-4'
                }`}
              >
                <div className="mr-6 flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${
                    activeStep === index 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-200"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right side - Phone mockup */}
          <div className="lg:w-1/2 flex justify-center sticky top-1/4">
            <div ref={phoneRef} className="relative w-64 h-auto transition-all duration-700">
              {/* Phone frame */}
              <div className="border-4 border-gray-800 rounded-3xl overflow-hidden bg-white shadow-xl">
                {/* Phone content - Replace with actual app screenshots */}
                <div className="pt-8 pb-10 px-4">
                  {/* ADD PHONE SCREENSHOT IMAGES HERE */}
                  {steps.map((step, index) => (
                    <div 
                      key={index}
                      className={`w-full h-96 rounded-lg flex items-center justify-center transition-opacity duration-500 absolute top-8 left-4 right-4 ${
                        activeStep === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                      style={{
                        backgroundColor: ['#f0fdf4', '#e0f2fe', '#fef3c7', '#fce7f3'][index % 4]
                      }}
                    >
                      <div className="text-center">
                        <span className="text-gray-700 font-medium">App Screenshot for Step {index + 1}</span>
                        <p className="text-xs text-gray-500 mt-2">User will need to add phone images for each step</p>
                      </div>
                    </div>
                  ))}
                  {/* Default placeholder to maintain height */}
                  <div className="w-full h-96 bg-transparent"></div>
                </div>
                {/* Phone home button */}
                <div className="w-12 h-1 bg-gray-300 mx-auto mb-2 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
