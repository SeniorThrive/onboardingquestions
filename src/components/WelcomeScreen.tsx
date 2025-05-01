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
          Welcome to Your Journey with SeniorThrive
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Every great journey begins with a single step. Today, you're taking that step 
          towards a more confident, comfortable, and secure living experience.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-soft p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Why This Matters
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Just like every person has a unique story, every home has its own character. 
              We believe in creating solutions that work for <em>you</em>, not the other way around.
            </p>
            
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
              "The key to living confidently isn't about changing who you are—it's about 
              enhancing the life you already love."
            </blockquote>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              What to Expect
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span>Takes about 15-20 minutes</span>
              </li>
              <li className="flex items-start">
                <Shield className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span>Your information is private and secure</span>
              </li>
              <li className="flex items-start">
                <Home className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span>Get personalized recommendations for your home</span>
              </li>
              <li className="flex items-start">
                <Heart className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span>Support for a more confident lifestyle</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center space-y-6">
        <Button 
          variant="primary"
          onClick={onStart}
          className="text-xl px-12 py-4"
        >
          Begin Your Journey
        </Button>
        
        <p className="text-gray-600">
          You can save your progress at any time and return later.
        </p>
      </div>
    </div>
  );
};