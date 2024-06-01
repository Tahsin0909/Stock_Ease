import { Box, Button, Center, FormControl, FormLabel, Grid, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useDisclosure } from "@chakra-ui/react";
import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getCurrentISOTime } from "../../Helper/getTime";

const SaleOrder = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [products, setProducts] = useState(null)
    const [selected, setSelected] = useState(null)

    const min = 10000; // Minimum 5-digit number
    const max = 99990; // Maximum 5-digit number
    const randomFourDigitNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
    } = useForm()

    const getAuthUser = localStorage.getItem('AuthUser')
    const AuthUser = JSON.parse(getAuthUser)

    useEffect(() => {
        fetch('/public/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])





    function onSubmit(data) {
        console.log(data, selected);
        // const newProducts = {
            
        // }
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
                                    <Input  {...register('name')} value={AuthUser?.email} readOnly size={["sm"]} type="text" />
                                </FormControl>
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Invoice No:</FormLabel>
                                    <Input value={`#${randomFourDigitNumber}`} readOnly {...register('invoice')} size={["sm"]} type="text" />
                                </FormControl>
                            </Grid>
                            <Grid templateColumns='repeat(2, 1fr)' gap={[4, 8]}>
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Customer ID:</FormLabel>
                                    <Input  {...register('id')} size={["sm"]} type="text" />
                                </FormControl>
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Order Date:</FormLabel>
                                    <Input value={getCurrentISOTime()} readOnly {...register('date')} size={["sm"]} type="text" />
                                </FormControl>
                            </Grid>


                            {/* Render items as form fields */}
                            <Box mb={3} rounded={"20px"}>
                                <FormControl mb={0}>
                                    <FormLabel fontSize={[12, 13]}>Product Name:</FormLabel>
                                    {/* <Input size={["sm"]} type="text" /> */}
                                    <Multiselect
                                        textColor={'black'}
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
                                    <RadioGroup defaultValue='2'>
                                        <Stack spacing={5} direction='row'>
                                            <Radio {...register('payments')} colorScheme='red' value='false'>
                                                Pending
                                            </Radio>
                                            <Radio {...register('payments')} colorScheme='green' value='true'>
                                                Paid
                                            </Radio>
                                        </Stack>
                                    </RadioGroup>

                                </FormControl>
                            </Box>
                            <Button mt={4} backgroundColor={'#0039a6'} isLoading={isSubmitting} type='submit' textColor={'white'}>
                                Submit
                            </Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default SaleOrder;