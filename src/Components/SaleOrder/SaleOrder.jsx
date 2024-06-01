import { Box, Button, Center, FormControl, FormLabel, Grid, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useDisclosure } from "@chakra-ui/react";

const SaleOrder = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
                size={['sm', "2xl"]}

            >
                <ModalOverlay />
                <ModalContent >
                    <ModalBody>
                        <form >
                            <Grid templateColumns='repeat(2, 1fr)' gap={[4, 8]} mb={4}>
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Customer Name:</FormLabel>
                                    <Input size={["sm"]} type="text"   />
                                </FormControl>
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Invoice No:</FormLabel>
                                    <Input size={["sm"]} type="text"   />
                                </FormControl>
                            </Grid>
                            <Grid templateColumns='repeat(2, 1fr)' gap={[4, 8]}>
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Customer ID:</FormLabel>
                                    <Input size={["sm"]} type="text"   />
                                </FormControl>
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Order Date:</FormLabel>
                                    <Input size={["sm"]} type="text"   />
                                </FormControl>
                            </Grid>


                            {/* Render items as form fields */}
                            <FormLabel mt={[1, 2]} fontSize={[12, 13]}>Products:</FormLabel>
                            {/* <Grid templateColumns='repeat(2, 1fr)' gap={[4, 8]}> */}

                                {/* {selectedOrder?.items.map((data, idx) => (
                                    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={[3, 3]} key={idx} p={[3, 4]} mb={3} rounded={"20px"} shadow={'xl'}>
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>SKU ID:</FormLabel>
                                            <Input size={["sm"]} type="text"   />
                                        </FormControl>
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Product Name:</FormLabel>
                                            <Input size={["sm"]} type="text"   />
                                        </FormControl>
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Product ID:</FormLabel>
                                            <Input size={["sm"]} type="text"   />
                                        </FormControl>
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Category:</FormLabel>
                                            <Input size={["sm"]} type="text"   />
                                        </FormControl>
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Brand:</FormLabel>
                                            <Input size={["sm"]} type="text"   />
                                        </FormControl>
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Quantity:</FormLabel>
                                            <Input size={["sm"]} type="text"   />
                                        </FormControl>
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Total Price:</FormLabel>
                                            <Input size={["sm"]} type="text"   />
                                        </FormControl>
                                    </Grid>
                                ))}
                            </Grid> */}


                            {/* Grand Total and Payment Status */}
                            <Grid templateColumns='repeat(2, 1fr)' gap={[4, 8]}>
                                <FormControl mb={2}>
                                    <FormLabel fontSize={[12, 13]}>Grand Total:</FormLabel>
                                    <Input size={["sm"]} type="text"   />
                                </FormControl>
                                <FormControl mb={2}>
                                    <FormLabel fontSize={[12, 13]}>Payment Status:</FormLabel>
                                    <Input size={["sm"]} type="text"   />
                                </FormControl>
                            </Grid>
                            {/* Close button */}
                            {/* <Button mt={4} onClick={onClose}>Close</Button> */}
                        </form>
                        <Button mt={[2, 3]} onClick={onClose}>Update</Button>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default SaleOrder;