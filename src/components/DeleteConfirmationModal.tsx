import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/modal'
import { Button } from '@nextui-org/react'

interface DeleteConfirmationModalProps {
  isVisible: boolean
  onConfirm: () => void
  onCancel: () => void
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ isVisible, onConfirm, onCancel }) => {
  return (
    <Modal isOpen={isVisible} onClose={onCancel}>
      <ModalContent>
        <ModalHeader>
          <span>Confirm Deletion</span>
        </ModalHeader>
        <ModalBody>
          <p>Are you sure you want to delete this entry?</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={onConfirm}>
            Delete
          </Button>
          <Button onClick={onCancel}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DeleteConfirmationModal