import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/modal'
import { Button } from '@nextui-org/react'
import EditEntryForm from './EditEntryForm'
import { DictionaryEntryType } from '../types'

interface EditEntryModalProps {
  isVisible: boolean
  entry: DictionaryEntryType | null
  onSave: (oldEntry: DictionaryEntryType, newEntry: DictionaryEntryType) => void
  onCancel: () => void
}

const EditEntryModal: React.FC<EditEntryModalProps> = ({ isVisible, entry, onSave, onCancel }) => {
  return (
    <Modal isOpen={isVisible} onClose={onCancel}>
      <ModalContent>
        <ModalHeader>
          <span>Edit Entry</span>
        </ModalHeader>
        <ModalBody>
          {entry && <EditEntryForm initialEntry={entry} onSave={onSave} />}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onCancel}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default EditEntryModal