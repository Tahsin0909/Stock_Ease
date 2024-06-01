
import { Box } from "@chakra-ui/react";
import Header from "../../Components/Header/Header";
import StockTabs from "../../Components/StocksTab/StockTabs";

const Home = () => {

    return (
        <Box maxWidth={{ base: '380px', md: '700px', lg: '1250px' }} mx='auto'  py={4}>
            <Header />
            <StockTabs/>
        </Box>

    );
}
export default Home;