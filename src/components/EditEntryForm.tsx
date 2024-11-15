import React, { useState } from 'react'
import classNames from 'classnames'
import { DictionaryEntryType } from '../types'

interface EditEntryFormProps {
  initialEntry: DictionaryEntryType
  onSave: (oldEntry: DictionaryEntryType, newEntry: DictionaryEntryType) => void
}

const EditEntryForm: React.FC<EditEntryFormProps> = ({ initialEntry, onSave }) => {
  const [entry, setEntry] = useState<DictionaryEntryType>(initialEntry)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEntry(prevEntry => ({
      ...prevEntry,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(initialEntry, entry)
  }

  const buttonStyles = 'w-full py-2 font-medium rounded-md text-sm md:text-base'
  const inputStyles = 'bg-white border border-gray-300 rounded-md w-full py-2 px-3 text-sm md:text-base focus:outline-none focus:border-gray-500'
  const formContainerStyles = 'bg-gray-100 shadow-sm rounded-lg p-4 mb-4 md:mb-6'

  return (
    <form onSubmit={handleSubmit} className={formContainerStyles}>
      <div className="mb-3">
        <input
          type="text"
          name="phrase"
          value={entry.phrase}
          onChange={handleChange}
          placeholder="Phrase"
          className={inputStyles}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="meaning"
          value={entry.meaning}
          onChange={handleChange}
          placeholder="Meaning"
          className={inputStyles}
        />
      </div>
      <button
        type="submit"
        className={classNames(buttonStyles, 'bg-gray-900 text-white hover:bg-gray-700 transition-colors')}
      >
        Save
      </button>
    </form>
  )
}

export default EditEntryForm