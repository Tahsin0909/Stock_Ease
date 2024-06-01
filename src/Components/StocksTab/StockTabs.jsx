import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

const StockTabs = () => {
    return (
        <Tabs variant='unstyled' mt={[10, 20]}>
            <TabList>
                <Tab rounded={'xl'} p={['10px', '10px', '15px']} mr={[ '10px','25px']} border={'1px'} _selected={{ fontWeight: '700',border:'0px' ,color: 'white', bg: 'blue.500' }}>
                    Active Order
                </Tab>
                <Tab rounded={'xl'} p={['10px', '10px', '15px']} mr={[ '10px','25px']} border={'1px'} _selected={{ fontWeight: '700', border:'0px' ,color: 'white', bg: 'green.400' }}>
                    Completed Order
                </Tab>
            </TabList>
            <TabPanels border={'1px'} mt={[5, 10]} rounded={'xl'}>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default StockTabs;