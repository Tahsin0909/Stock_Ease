import { Box, Button, Center, FormControl, FormLabel, Grid, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useDisclosure } from "@chakra-ui/react";
import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const SaleOrder = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [products, setProducts] = useState(null)
    const [selected, setSelected] = useState(null)
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()




    useEffect(() => {
        fetch('/public/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])





    function onSubmit(data) {
        console.log(data, selected);
    }

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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid templateColumns='repeat(2, 1fr)' gap={[4, 8]} mb={4}>
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Customer Name:</FormLabel>
                                    <Input  {...register('name')} size={["sm"]} type="text" />
                                </FormControl>
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Invoice No:</FormLabel>
                                    <Input  {...register('invoice')} size={["sm"]} type="text" />
                                </FormControl>
                            </Grid>
                            <Grid templateColumns='repeat(2, 1fr)' gap={[4, 8]}>
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Customer ID:</FormLabel>
                                    <Input  {...register('id')} size={["sm"]} type="text" />
                                </FormControl>
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Order Date:</FormLabel>
                                    <Input  {...register('date')} size={["sm"]} type="text" />
                                </FormControl>
                            </Grid>


                            {/* Render items as form fields */}
                            <Box mb={3} rounded={"20px"}>
                                <FormControl mb={0}>
                                    <FormLabel fontSize={[12, 13]}>Product Name:</FormLabel>
                                    {/* <Input size={["sm"]} type="text" /> */}
                                    <Multiselect
                                        {...register('products')}
                                        options={products} // Options to display in the dropdown
                                        // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                        onSelect={setSelected}
                                        // onRemove={this.onRemove} // Function will trigger on remove event
                                        displayValue={"product_name"} // Property name to display in the dropdown options
                                    />
                                </FormControl>
                            </Box>


                            {/* Grand Total and Payment Status */}
                            <Box>
                                <FormControl mb={2}>
                                    <FormLabel fontSize={[12, 13]}>Payment Status:</FormLabel>
                                    <Input  {...register('payments')} size={["sm"]} type="text" />
                                </FormControl>
                            </Box>
                            <Button mt={4} backgroundColor={'#0039a6'} isLoading={isSubmitting} type='submit' textColor={'white'}>
                                Submit
                            </Button>
                        </form>
                        <Button mt={[2, 3]} onClick={onClose}>Update</Button>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default SaleOrder;