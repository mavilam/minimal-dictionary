import React, { useState } from 'react'
import classNames from 'classnames'

function NewEntryForm({ addEntry }) {
  const [isOpen, setIsOpen] = useState(false)
  const [phrase, setPhrase] = useState('')
  const [meaning, setMeaning] = useState('')

  const toggleForm = () => setIsOpen(!isOpen)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (phrase && meaning) {
      addEntry({ phrase, meaning })
      setPhrase('')
      setMeaning('')
      setIsOpen(false)
    }
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
              id="phrase"
              value={phrase}
              onChange={(e) => setPhrase(e.target.value)}
              className={inputStyles}
              placeholder="Enter a phrase or word"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="meaning">
              Meaning
            </label>
            <textarea
              id="meaning"
              value={meaning}
              onChange={(e) => setMeaning(e.target.value)}
              className={inputStyles}
              rows="3"
              placeholder="Enter the meaning"
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
