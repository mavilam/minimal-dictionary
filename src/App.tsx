import React, { useState, useEffect } from 'react'
import NewEntryForm from './components/NewEntryForm'
import DictionaryEntry from './components/DictionaryEntry'
import { DictionaryEntryType } from './types'
import './index'

const App: React.FC = () => {
  const [entries, setEntries] = useState<DictionaryEntryType[]>([])

  useEffect(() => {
    const storedEntries = localStorage.getItem('dictionaryEntries')
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries))
    }
  }, [])

  const addEntry = (entry: DictionaryEntryType) => {
    const updatedEntries = [...entries, entry]
    setEntries(updatedEntries)
    localStorage.setItem('dictionaryEntries', JSON.stringify(updatedEntries))
  }

  const deleteEntry = (entryToDelete: DictionaryEntryType) => {
    const updatedEntries = entries.filter(entry => entry.phrase !== entryToDelete.phrase)
    setEntries(updatedEntries)
    localStorage.setItem('dictionaryEntries', JSON.stringify(updatedEntries))
  }

  const editEntry = (oldEntry: DictionaryEntryType, newEntry: DictionaryEntryType) => {
    const updatedEntries = entries.map(entry =>
      entry.phrase === oldEntry.phrase ? newEntry : entry
    )
    setEntries(updatedEntries)
    localStorage.setItem('dictionaryEntries', JSON.stringify(updatedEntries))
  }

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 font-sans text-gray-900">
      <header className="mb-4 md:mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold">Lexio</h1>
        <p className="text-gray-500 text-sm md:text-base">where concepts meet meanings</p>
      </header>
      <div className="max-w-md mx-auto">
        <NewEntryForm onSave={addEntry} />
        <div className="mt-4 md:mt-6 space-y-4">
          {entries.map((entry, index) => (
            <DictionaryEntry
              key={index}
              entry={entry}
              deleteEntry={deleteEntry}
              editEntry={editEntry}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
