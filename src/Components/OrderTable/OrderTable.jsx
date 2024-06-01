/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, Center, FormControl, FormLabel, Grid, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useDisclosure } from "@chakra-ui/react";
import TableLoader from "../Loader/TableLoader";
import { time } from "../../Helper/time";
import { HiDotsVertical } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { useState } from "react";



const OrderTable = ({ data, isPending, refetch }) => {
    const { colorMode } = useColorMode()

    //modal
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedOrder, setSelectedOrder] = useState(null);


    const handleDotClick = (order) => {
        setSelectedOrder(order);
        onOpen();
    };



    return (
        <TableContainer>
            {
                isPending ? <TableLoader />
                    :
                    <Table variant='striped' colorScheme='teal'>
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>CUSTOMER NAME</Th>
                                <Th>PRICE</Th>
                                <Th>LAST MODIFIED</Th>
                                <Th>EDIT / VIEW</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data?.map((order, idx) => <Tr key={idx}>
                                    <Td>{idx + 1}</Td>
                                    <Td display={'flex'} alignItems={'center'} gap={1}> <FaUser color={colorMode === 'light' ? 'blue' : 'white'} /> {order.customer_name}</Td>
                                    <Td>$ {order.total_amount}</Td>
                                    <Td>{time(order.modified_date)}</Td>
                                    <Td>
                                        <HiDotsVertical onClick={() => handleDotClick(order)} color={colorMode === 'light' ? 'blue' : 'white'} />
                                    </Td>
                                </Tr>)
                            }
                        </Tbody>
                    </Table>
            }
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
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
                                    <Input size={["sm"]} type="text" value={selectedOrder?.customer_name} readOnly />
                                </FormControl>
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Invoice No:</FormLabel>
                                    <Input size={["sm"]} type="text" value={selectedOrder?.invoice_no} readOnly />
                                </FormControl>
                            </Grid>
                            <Grid templateColumns='repeat(2, 1fr)' gap={[4, 8]}>
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Customer ID:</FormLabel>
                                    <Input size={["sm"]} type="text" value={selectedOrder?.customer_id} readOnly />
                                </FormControl>
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Order Date:</FormLabel>
                                    <Input size={["sm"]} type="text" value={time(selectedOrder?.order_date)} readOnly />
                                </FormControl>
                            </Grid>


                            {/* Render items as form fields */}
                            <FormLabel mt={[1, 2]} fontSize={[12, 13]}>Products:</FormLabel>
                            <Grid templateColumns='repeat(2, 1fr)' gap={[4, 8]}>

                                {selectedOrder?.items.map((data, idx) => (
                                    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={[3, 3]} key={idx} p={[3, 4]} mb={3} rounded={"20px"} shadow={'xl'}>
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>SKU ID:</FormLabel>
                                            <Input size={["sm"]} type="text" value={data.sku_id} readOnly />
                                        </FormControl>
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Product Name:</FormLabel>
                                            <Input size={["sm"]} type="text" value={data.product_name} readOnly />
                                        </FormControl>
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Product ID:</FormLabel>
                                            <Input size={["sm"]} type="text" value={data.product_id} readOnly />
                                        </FormControl>
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Category:</FormLabel>
                                            <Input size={["sm"]} type="text" value={data.category} readOnly />
                                        </FormControl>
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Brand:</FormLabel>
                                            <Input size={["sm"]} type="text" value={data.brand} readOnly />
                                        </FormControl>
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Quantity:</FormLabel>
                                            <Input size={["sm"]} type="text" value={data.quantity} readOnly />
                                        </FormControl>
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Total Price:</FormLabel>
                                            <Input size={["sm"]} type="text" value={data.total_price} readOnly />
                                        </FormControl>
                                    </Grid>
                                ))}
                            </Grid>


                            {/* Grand Total and Payment Status */}
                            <Grid templateColumns='repeat(2, 1fr)' gap={[4, 8]}>
                                <FormControl mb={2}>
                                    <FormLabel fontSize={[12, 13]}>Grand Total:</FormLabel>
                                    <Input size={["sm"]} type="text" value={selectedOrder?.total_amount} readOnly />
                                </FormControl>
                                <FormControl mb={2}>
                                    <FormLabel fontSize={[12, 13]}>Payment Status:</FormLabel>
                                    <Input size={["sm"]} type="text" value={selectedOrder?.paid ? 'Paid' : 'Pending'} readOnly />
                                </FormControl>
                            </Grid>
                            {/* Close button */}
                            {/* <Button mt={4} onClick={onClose}>Close</Button> */}
                        </form>
                        <Button mt={[2, 3]} onClick={onClose}>Update</Button>

                    </ModalBody>
                </ModalContent>
            </Modal>




        </TableContainer>
    );
};

export default OrderTable;

