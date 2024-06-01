import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import OrderTable from "../OrderTable/OrderTable";

const StockTabs = () => {
    return (
        <Tabs variant='unstyled' mt={[10, 20]} w={'full'}>
            <TabList>
                <Tab rounded={'xl'} p={['10px', '10px', '15px']} mr={['10px', '25px']} border={'1px'} _selected={{ fontWeight: '700', border: '0px', color: 'white', bg: 'blue.500' }}>
                    Active Order
                </Tab>
                <Tab rounded={'xl'} p={['10px', '10px', '15px']} mr={['10px', '25px']} border={'1px'} _selected={{ fontWeight: '700', border: '0px', color: 'white', bg: 'green.400' }}>
                    Completed Order
                </Tab>
            </TabList>
            <TabPanels  mt={[3, 5]} rounded={'xl'} shadow={'xl'}>
                <TabPanel>
                    <OrderTable data={"Active"} />
                </TabPanel>
                <TabPanel>
                    <OrderTable data={'Completed'}/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default StockTabs;