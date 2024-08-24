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
import { useTranslation } from 'react-i18next'

  type primaryModalProps = {
    isOpen: boolean,
    terminos: string,
    textoBoton: string,
    redirectTo: string,
    onClose: () => void
}

export const PrimaryModal = ({ isOpen, onClose, terminos, textoBoton, redirectTo} : primaryModalProps) => {
  const {t} = useTranslation() 
  const handleRedirect = () => {
    window.open(redirectTo)
    onClose()
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{ t('modal.title') }</ModalHeader>
          <ModalCloseButton />
          <ModalBody fontWeight="light">
            {terminos}
          </ModalBody>
          <ModalFooter>
            <Button variant='secondary' mr={3} onClick={onClose}>
            { t('modal.button') }
            </Button>
            <Button variant='primary' onClick={handleRedirect}>{textoBoton}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
