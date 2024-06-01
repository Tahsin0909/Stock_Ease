import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import OrderTable from "../OrderTable/OrderTable";
import useActiveOrder from "../../Hooks/useActiveOrder";
import useCompletedOrder from "../../Hooks/useComleteedOrder";
import SaleOrder from "../SaleOrder/SaleOrder";

const StockTabs = () => {
    const [activeOrderData, isPending, refetch] = useActiveOrder()
    const [CompletedOrderData, pending] = useCompletedOrder()
    return (
        <Tabs variant='unstyled' mt={[10, 20]} w={'full'}>
            <TabList>
                <Box display={'flex'} justifyItems={'space-between'} w={"full"}>
                    <Tab rounded={'xl'} p={['10px', '10px', '15px']} mr={['10px', '25px']} border={'1px'} _selected={{ fontWeight: '700', border: '0px', color: 'white', bg: 'blue.500' }}>
                        Active Order
                    </Tab>
                    <Tab rounded={'xl'} p={['10px', '10px', '15px']} mr={['10px', '25px']} border={'1px'} _selected={{ fontWeight: '700', border: '0px', color: 'white', bg: 'green.400' }}>
                        Completed Order
                    </Tab>
                </Box>
                <SaleOrder />
            </TabList>
            <TabPanels mt={[3, 5]} rounded={'xl'} shadow={'xl'}>
                <TabPanel>
                    <OrderTable data={activeOrderData} isPending={isPending} refetch={refetch} />
                </TabPanel>
                <TabPanel>
                    <OrderTable data={CompletedOrderData} isPending={pending} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default StockTabs;