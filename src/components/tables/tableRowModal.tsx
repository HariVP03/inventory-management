import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
} from "@chakra-ui/react";

const TableRowModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    name: string;
    date: string;
    desc: string;
}> = ({ isOpen, onClose, name, date, desc }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>More Information</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input mb={2} value={name} readOnly />
                        <FormLabel>Date</FormLabel>
                        <Input mb={2} value={date} readOnly />
                        <FormLabel>Description</FormLabel>
                        <Textarea mb={2} h="300px" value={desc} readOnly />
                    </FormControl>
                </ModalBody>
                {/* <ModalFooter></Mo> */}
            </ModalContent>
        </Modal>
    );
};

export default TableRowModal;
