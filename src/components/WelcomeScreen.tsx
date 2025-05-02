import React from 'react';
import { Header } from './Header';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-center py-20 px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-4">Let’s Personalize Your Thrive Experience</h1>
          <p className="text-lg md:text-xl text-gray-700">A few quick answers today unlock smarter safety tips, wellness nudges, and a ThriveScore that actually means something to you.</p>
        </section>

        {/* Value Proposition Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-blue-700 mb-6">Why It Matters</h2>
            <p className="text-gray-700 text-lg md:text-xl">
              Your home, your habits, your goals—they’re all unique. When you fill out this profile, ThriveVision learns what thriving looks like for you and tailors every scan, score, and suggestion to fit.
            </p>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-10 px-6 bg-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 italic text-lg md:text-xl">“Confidence at home isn’t about changing who you are. It’s about amplifying the life you love.”</p>
          </div>
        </section>

        {/* Benefits/Features Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">                
              <p className="text-gray-700 text-lg md:text-xl text-center">⏱ 5–10 minutes from start to finish</p>
            </div>
            {/* Box 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <p className="text-gray-700 text-lg md:text-xl text-center">🔒 Guaranteed privacy—data is encrypted and never sold</p>
            </div>
            {/* Box 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <p className="text-gray-700 text-lg md:text-xl text-center">🛠 Hyper-personal recommendations to boost safety and independence</p>
            </div>
            {/* Box 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <p className="text-gray-700 text-lg md:text-xl text-center">❤️ Actionable tips and reminders that keep you moving forward</p>
            </div>
          </div>
        </section>

        {/* Pro Tip Section */}
        <section className="py-10 px-6 bg-blue-100">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Pro Tip</h3>
            <p className="text-gray-700 text-lg md:text-xl">Watch the progress bar tick upward—each step powers ThriveVision and sharpens your ThriveScore in real time.</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 text-center">
          <button onClick={onStart} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 text-lg">Start My Profile</button>
        </section>
      </main>
    </div>
  );
};