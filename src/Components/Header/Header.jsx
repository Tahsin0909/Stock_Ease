import { Box, Image, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box display={'flex'} alignContent={'center'} justifyContent={'space-between'} >
            <Link to={'/'}>
                <Box display={'flex'} gap={'6px'} alignItems={'center'} to='/'>
                    <Image w={[8, 8, 8]} src="https://cdn-icons-png.flaticon.com/128/7656/7656411.png" />
                    <Text fontFamily={'Edu TAS Beginner'} fontSize={[25]} fontWeight={600} color={colorMode === 'light' ? 'blue' : 'white'}>
                        StockEase
                    </Text>
                </Box>
            </Link>
            <Box padding='8px' rounded='full' boxShadow={colorMode === 'light' ? 'xl' : 'dark-lg'} width='fit-content' height='fit-content' onClick={toggleColorMode}>
                {
                    colorMode === 'light' ?
                        <Image w={[8, 10]} src="https://cdn-icons-png.flaticon.com/128/2698/2698194.png" />
                        // <img width='35px' height='35px' src="https://cdn-icons-png.flaticon.com/128/2698/2698194.png" alt="" />
                        : <Image w={[8, 10]} src="https://cdn-icons-png.flaticon.com/128/9689/9689800.png" />
                }
            </Box >
        </Box>
    );
};

export default Header;