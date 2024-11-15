import React, { useState } from 'react'
import classNames from 'classnames'
import { DictionaryEntryType } from '../types'

interface NewEntryFormProps {
  onSave: (entry: DictionaryEntryType) => void
}

const NewEntryForm: React.FC<NewEntryFormProps> = ({ onSave }) => {
  const [entry, setEntry] = useState<DictionaryEntryType>({ phrase: '', meaning: '' })
  const [isOpen, setIsOpen] = useState(false)

  const toggleForm = () => {
    setIsOpen(!isOpen)
  }

  const handlePhraseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEntry(prevEntry => ({
      ...prevEntry,
      [name]: value
    }))
  }

  const handleMeaningChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEntry(prevEntry => ({
      ...prevEntry,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(entry)
    setEntry({ phrase: '', meaning: '' })
    setIsOpen(false)
  }

  const buttonStyles = 'w-full py-2 font-medium rounded-md text-sm md:text-base'
  const inputStyles = 'bg-white border border-gray-300 rounded-md w-full py-2 px-3 text-sm md:text-base focus:outline-none focus:border-gray-500'
  const formContainerStyles = 'bg-gray-100 shadow-sm rounded-lg p-4 mb-4 md:mb-6'

  return (
    <div>
      <button
        onClick={toggleForm}
        className={classNames(buttonStyles, 'bg-gray-900 text-white hover:bg-gray-700 transition-colors mb-4')}
      >
        {isOpen ? 'Close' : 'Add new entry'}
      </button>
      {isOpen && (
        <form onSubmit={handleSubmit} className={formContainerStyles}>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1" htmlFor="phrase">
              Phrase/Word
            </label>
            <input
              type="text"
              name="phrase"
              value={entry.phrase}
              onChange={handlePhraseChange}
              placeholder="Phrase"
              className={inputStyles}
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1" htmlFor="meaning">
              Meaning
            </label>
            <textarea
              name="meaning"
              value={entry.meaning}
              onChange={handleMeaningChange}
              rows={3}
              placeholder="Enter the meaning"
              className={inputStyles}
            />
          </div>
          <button
            type="submit"
            className={classNames(buttonStyles, 'bg-gray-900 text-white hover:bg-gray-700 transition-colors')}
          >
            Add Entry
          </button>
        </form>
      )}
    </div>
  )
}

export default NewEntryForm