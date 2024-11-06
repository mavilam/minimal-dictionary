import React, { useState, useEffect } from 'react';
import DictionaryEntry from './components/DictionaryEntry';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = localStorage.getItem('dictionaryEntries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  const addEntry = (entry) => {
    const updatedEntries = [...entries, entry];
    setEntries(updatedEntries);
    localStorage.setItem('dictionaryEntries', JSON.stringify(updatedEntries));
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 font-sans text-gray-900">
      <header className="mb-4 md:mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold">Dictionary</h1>
        <p className="text-gray-500 text-sm md:text-base">Minimal dictionary for phrases and meanings</p>
      </header>
      <div className="max-w-md mx-auto">
        <NewEntryForm addEntry={addEntry} />
        <div className="mt-4 md:mt-6 space-y-4">
          {entries.map((entry, index) => (
            <DictionaryEntry key={index} phrase={entry.phrase} meaning={entry.meaning} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
