/* eslint-disable no-unused-vars */
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Grid, Input, Modal, ModalBody, ModalContent, ModalOverlay, useColorMode, useDisclosure } from "@chakra-ui/react";
import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getCurrentISOTime } from "../../Helper/getTime";
import useActiveOrder from "../../Hooks/useActiveOrder";

const SaleOrder = () => {

    // hooks for active order 
    const [activeOrderData, isLoading, orderRefetch] = useActiveOrder()

    // for modal 
    const { isOpen, onOpen, onClose } = useDisclosure()

    // set products for Multiselect optionx 
    const [products, setProducts] = useState(null)

    // products is selected by multiselect 
    const [selected, setSelected] = useState(null)


    // 5 digit random number for invoice 
    const min = 10000; // Minimum 5-digit number
    const max = 99990; // Maximum 5-digit number
    const randomFourDigitNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    // 5 digit random number for invoice 


    // react hook form 
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()



    // get authuser from local storage 
    const getAuthUser = localStorage.getItem('AuthUser')
    const AuthUser = JSON.parse(getAuthUser)
    // get authuser from local storage 


    // fetch products data fpor options 
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // fetch products data for options 


    // for theme 
    const { colorMode } = useColorMode()
    // for theme 


    // function for calculate total products amount in items 
    const TotalAmount = (order) => {
        return order.reduce((total, item) => total + item.total_price, 0);
    }
    // function for calculate total products amount in items 


    // handle submit data 
    const onSubmit = async (data) => {

        // if have  selected products
        if (selected) {
            const newProducts = {

                order_id: 1001,
                customer_id: data.id,
                customer_name: AuthUser?.email,
                order_date: data.date,
                items: selected,
                total_amount: TotalAmount(selected),
                paid: false,
                invoice_no: data.invoice,
                invoice_date: data.date,
                modified_date: data.date
            }
            const newProductsStringify = JSON.stringify(newProducts)
            localStorage.setItem('newProducts', newProductsStringify)
            await orderRefetch(); // Await refetch to ensure it completes
            onClose();
        }

    }
    // handle submit data 


    return (

        <Box >


            {/* sale Button for open modal  */}
            <Box >
                <Button rounded={'xl'} py={['25px', '10px', '30px']} backgroundColor={'#0039a6'} isLoading={isSubmitting} type='submit' textColor={'white'} onClick={onOpen}>Sale Order</Button>
            </Box>
            {/* sale Button for open modal  */}


            {/* modal start  */}
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

                                {/* Customer Name read only  */}
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Customer Name:</FormLabel>
                                    <Input  {...register('name')} value={AuthUser?.email} readOnly size={["sm"]} type="text" />
                                </FormControl>
                                {/* Customer Name read only  */}

                                {/* Invoice No read only  */}
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Invoice No:</FormLabel>
                                    <Input value={`#${randomFourDigitNumber}`} readOnly {...register('invoice')} size={["sm"]} type="text" />
                                </FormControl>
                                {/* Invoice No read only  */}

                            </Grid>
                            <Grid templateColumns='repeat(2, 1fr)' gap={[4, 8]}>

                                {/* Customer ID input */}
                                <FormControl isInvalid={errors.id}>
                                    <FormLabel fontSize={[12, 13]}>Customer ID:</FormLabel>
                                    <Input  {...register('id', { required: 'Id is required' })} size={["sm"]} type="text" />
                                    <FormErrorMessage>{errors.id && errors.id.message}</FormErrorMessage>
                                </FormControl>
                                {/* Customer ID input */}

                                {/* Order Date read only and fate from getCurrent Time func  */}
                                <FormControl >
                                    <FormLabel fontSize={[12, 13]}>Order Date:</FormLabel>
                                    <Input value={getCurrentISOTime()} readOnly {...register('date')} size={["sm"]} type="text" />
                                </FormControl>
                                {/* Order Date read only and fate from getCurrent Time func  */}

                            </Grid>


                            {/* multiselect  */}
                            {/* Render items as form fields */}
                            <Box mb={3} rounded={"20px"} color={colorMode === 'light' ? 'black' : 'black'} >
                                <FormControl mb={0} >
                                    <FormLabel color={colorMode === 'light' ? 'black' : 'white'} fontSize={[12, 13]}>Product Name:</FormLabel>
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
                            {/* multiselect  */}


                            {/* button for submit  */}
                            <Button mt={4} backgroundColor={'#0039a6'} isLoading={isSubmitting} type='submit' textColor={'white'}>
                                Submit
                            </Button>
                            {/* button for submit  */}
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
            {/* modal end  */}


        </Box>
    );
};

export default SaleOrder;