/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useDisclosure } from "@chakra-ui/react";
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
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {selectedOrder?.customer_name}
                        <Text fontSize={'15px'}>
                            Customer Id : {selectedOrder?.customer_id}
                        </Text>
                        <Text fontSize={'15px'}>
                            Order Date: {time(selectedOrder?.order_date)}
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {
                            selectedOrder?.items.map((data, idx) => <Box key={idx}>
                                <Text>
                                    {data.product_name}
                                </Text>
                            </Box>
                            )
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>

        </TableContainer>
    );
};

export default OrderTable;

