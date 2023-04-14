import {
    Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";

interface UseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PurchasesSubscribeModal: FC<UseModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>仕入登録</ModalHeader>
        <ModalCloseButton />
        <ModalBody>hello</ModalBody>
      </ModalContent>
    </Modal>
  );
};
