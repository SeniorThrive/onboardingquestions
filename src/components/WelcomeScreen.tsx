import React from 'react';
import { Heart, Shield, Home, Clock } from 'lucide-react';
import { Button } from './Button';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Let’s Personalize Your Thrive Experience
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A few quick answers today unlock smarter safety tips, wellness nudges, and a ThriveScore that actually means something to you.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-soft p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Why It Matters
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Your home, your habits, your goals—they’re all unique. When you fill out this profile, ThriveVision learns what thriving looks like for you and tailors every scan, score, and suggestion to fit.
            </p>
            
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
              “Confidence at home isn’t about changing who you are. It’s about amplifying the life you love.”
            </blockquote>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              What You’ll Get
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span>⏱ 5–10 minutes from start to finish</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span>Your information is private and secure</span>
              </li>
              <li className="flex items-start">
                <Home className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span>🛠 Hyper-personal recommendations to boost safety and independence</span>
              </li>
              <li className="flex items-start">
                <Heart className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span>❤️ Actionable tips and reminders that keep you moving forward</span>
              </li>
            </ul>
            <div className='mt-6'>
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Pro Tip</h3>
            <p>Watch the progress bar tick upward—each step powers ThriveVision and sharpens your ThriveScore in real time.</p>
            </div>
          </div>
        </div>  
      </div>

      <div className="text-center space-y-6">
        <Button 
          variant="primary"
          onClick={onStart}
          className="text-xl px-12 py-4"
        >
          Start My Profile
        </Button>
        
      </div>
    </div>
  );
};