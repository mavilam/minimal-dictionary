import React, { useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip } from '@nextui-org/react'
import { DeleteIcon } from './DeleteIcon'
import { EditIcon } from './EditIcon'
import DeleteConfirmationModal from './DeleteConfirmationModal'
import EditEntryModal from './EditEntryModal'
import { DictionaryEntryType } from '../types'

interface DictionaryEntryProps {
  entry: DictionaryEntryType
  deleteEntry: (entry: DictionaryEntryType) => void
  editEntry: (oldEntry: DictionaryEntryType, newEntry: DictionaryEntryType) => void
}

const DictionaryEntry: React.FC<DictionaryEntryProps> = ({ entry, deleteEntry, editEntry }) => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const [entryToDelete, setEntryToDelete] = useState<DictionaryEntryType | null>(null)
  const [entryToEdit, setEntryToEdit] = useState<DictionaryEntryType | null>(null)

  const handleDeleteClick = (entry: DictionaryEntryType) => {
    setEntryToDelete(entry)
    setIsDeleteModalVisible(true)
  }

  const handleConfirmDelete = () => {
    if (entryToDelete) {
      deleteEntry(entryToDelete)
      setIsDeleteModalVisible(false)
      setEntryToDelete(null)
    }
  }

  const handleCancelDelete = () => {
    setIsDeleteModalVisible(false)
    setEntryToDelete(null)
  }

  const handleEditClick = (entry: DictionaryEntryType) => {
    setEntryToEdit(entry)
    setIsEditModalVisible(true)
  }

  const handleSaveEdit = (oldEntry: DictionaryEntryType, newEntry: DictionaryEntryType) => {
    editEntry(oldEntry, newEntry)
    setIsEditModalVisible(false)
    setEntryToEdit(null)
  }

  const handleCancelEdit = () => {
    setIsEditModalVisible(false)
    setEntryToEdit(null)
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
                  <span
                    className="text-lg text-default-400 cursor-pointer active:opacity-50"
                    onClick={() => handleEditClick(entry)}
                  >
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
        isVisible={isDeleteModalVisible}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />

      <EditEntryModal
        isVisible={isEditModalVisible}
        entry={entryToEdit}
        onSave={handleSaveEdit}
        onCancel={handleCancelEdit}
      />
    </>
  )
}

export default DictionaryEntry