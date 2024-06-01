/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, Center, FormControl, FormLabel, Grid, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useDisclosure } from "@chakra-ui/react";
import TableLoader from "../Loader/TableLoader";
import { time } from "../../Helper/time";
import { HiDotsVertical } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { useState } from "react";



const OrderTable = ({ data, isPending, refetch }) => {
    // theme 
    const { colorMode } = useColorMode()

    //modal
    const { isOpen, onOpen, onClose } = useDisclosure()


    // select data for modal
    const [selectedOrder, setSelectedOrder] = useState(null);
    const handleDotClick = (order) => {
        setSelectedOrder(order);
        onOpen();
    };
    // select data for modal


    return (
        <TableContainer>

            {/* table  */}
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
            {/* table  */}

            {/* modal  */}
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

                                {/* ustomer_name  */}
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Customer Name:</FormLabel>
                                    <Input size={["sm"]} type="text" value={selectedOrder?.customer_name} readOnly />
                                </FormControl>
                                {/* ustomer_name */}

                                {/* invoice_no */}
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Invoice No:</FormLabel>
                                    <Input size={["sm"]} type="text" value={selectedOrder?.invoice_no} readOnly />
                                </FormControl>
                                {/* invoice_no */}

                            </Grid>


                            <Grid templateColumns='repeat(2, 1fr)' gap={[4, 8]}>
                                {/* Customer ID  */}
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Customer ID:</FormLabel>
                                    <Input size={["sm"]} type="text" value={selectedOrder?.customer_id} readOnly />
                                </FormControl>
                                {/* Customer ID  */}

                                {/* Order Date:  */}
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Order Date:</FormLabel>
                                    <Input size={["sm"]} type="text" value={time(selectedOrder?.order_date)} readOnly />
                                </FormControl>
                                {/* Order Date:  */}
                            </Grid>


                            {/* Render items as form fields */}
                            <FormLabel mt={[1, 2]} fontSize={[12, 13]}>Products:</FormLabel>

                            <Grid templateColumns='repeat(2, 1fr)' gap={[4, 8]}>

                                {/* products details  */}
                                {selectedOrder?.items.map((data, idx) => (
                                    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={[3, 3]} key={idx} p={[3, 4]} mb={3} rounded={"20px"} shadow={'xl'}>
                                        {/* SKU ID  */}
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>SKU ID:</FormLabel>
                                            <Input size={["sm"]} type="text" value={data.sku_id} readOnly />
                                        </FormControl>
                                        {/* SKU ID */}

                                        {/* product Name  */}
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Product Name:</FormLabel>
                                            <Input size={["sm"]} type="text" value={data.product_name} readOnly />
                                        </FormControl>
                                        {/* product Name  */}

                                        {/* Product ID:  */}
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Product ID:</FormLabel>
                                            <Input size={["sm"]} type="text" value={data.product_id} readOnly />
                                        </FormControl>
                                        {/* Product ID: */}


                                        {/* Category  */}
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Category:</FormLabel>
                                            <Input size={["sm"]} type="text" value={data.category} readOnly />
                                        </FormControl>
                                        {/* Category  */}

                                        {/* Brand  */}
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Brand:</FormLabel>
                                            <Input size={["sm"]} type="text" value={data.brand} readOnly />
                                        </FormControl>
                                        {/* Brand  */}

                                        {/* Quantity  */}
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Quantity:</FormLabel>
                                            <Input size={["sm"]} type="text" value={data.quantity} readOnly />
                                        </FormControl>
                                        {/* Quantity  */}

                                        {/* Total Price  */}
                                        <FormControl mb={0}>
                                            <FormLabel fontSize={[12, 13]}>Total Price:</FormLabel>
                                            <Input size={["sm"]} type="text" value={data.total_price} readOnly />
                                        </FormControl>
                                        {/* Total Price  */}
                                    </Grid>
                                ))}
                            </Grid>
                            {/* products details  */}

                            {/* total ammout and pending status  */}
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
                            {/* total ammout and pending status  */}
                        
                        </form>

                        {/* button for close modal  */}
                        <Button backgroundColor={'#0039a6'} textColor={'white'} mt={[2, 3]} onClick={onClose}>Update</Button>


                    </ModalBody>
                </ModalContent>
            </Modal>
            {/* modal  */}



        </TableContainer>
    );
};

export default OrderTable;

