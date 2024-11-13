import React, { useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip } from '@nextui-org/react'
import { DeleteIcon } from './DeleteIcon'
import { EditIcon } from './EditIcon'
import DeleteConfirmationModal from './DeleteConfirmationModal'

interface DictionaryEntryType {
  phrase: string
  meaning: string
}

interface DictionaryEntryProps {
  entry: DictionaryEntryType
  deleteEntry: (entry: DictionaryEntryType) => void
}

const DictionaryEntry: React.FC<DictionaryEntryProps> = ({ entry, deleteEntry }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [entryToDelete, setEntryToDelete] = useState<DictionaryEntryType | null>(null)

  const handleDeleteClick = (entry: DictionaryEntryType) => {
    setEntryToDelete(entry)
    setIsModalVisible(true)
  }

  const handleConfirmDelete = () => {
    if (entryToDelete) {
      deleteEntry(entryToDelete)
      setIsModalVisible(false)
      setEntryToDelete(null)
    }
  }

  const handleCancelDelete = () => {
    setIsModalVisible(false)
    setEntryToDelete(null)
  }

  return (
    <>
      <Table hideHeader aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>key</TableColumn>
          <TableColumn>value</TableColumn>
          <TableColumn>actions</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key={entry.phrase}>
            <TableCell className="font-semibold">{entry.phrase}</TableCell>
            <TableCell>{entry.meaning}</TableCell>
            <TableCell>
              <div className="relative flex items-right gap-2">
                <Tooltip content="Edit Entry">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EditIcon />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete Entry">
                  <span
                    className="text-lg text-danger cursor-pointer active:opacity-50"
                    onClick={() => handleDeleteClick(entry)}
                  >
                    <DeleteIcon />
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <DeleteConfirmationModal
        isVisible={isModalVisible}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  )
}

export default DictionaryEntry
