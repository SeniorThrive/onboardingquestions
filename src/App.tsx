import React from 'react';
import { Home } from './pages/Home';
import { QuestionnaireProvider } from './context/QuestionnaireContext';

function App() {
  return (
    <QuestionnaireProvider>
      <div className="min-h-screen bg-gray-50">
        <Home />
      </div>
    </QuestionnaireProvider>
  );
}

export default App;