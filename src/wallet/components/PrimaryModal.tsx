import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react'

  type primaryModalProps = {
    isOpen: boolean,
    terminos: string,
    textoBoton: string,
    redirectTo: string,
    onClose: () => void
}

export const PrimaryModal = ({ isOpen, onClose, terminos, textoBoton, redirectTo} : primaryModalProps) => {
  const handleRedirect = () => {
    window.open(redirectTo)
    onClose()
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Terminos y condiciones</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontWeight="light">
            {terminos}
          </ModalBody>
          <ModalFooter>
            <Button variant='secondary' mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button variant='primary' onClick={handleRedirect}>{textoBoton}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
