import { Box, useColorMode } from "@chakra-ui/react";

const Home = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box  padding='8px' rounded='full' boxShadow={colorMode === 'light' ?'xl' : 'dark-lg'} width='fit-content' height='fit-content'  onClick={toggleColorMode}>
            {colorMode === 'light' ?
            <img width='35px' height='35px' src="https://cdn-icons-png.flaticon.com/128/2698/2698194.png" alt="" />
              : <img width='35px'height='35px' src="https://cdn-icons-png.flaticon.com/128/9689/9689800.png" alt="" />}
            

            {/* Toggle {colorMode === 'light' ? 'Dark' : 'Light'} */}
        </Box >
    );
};

export default Home;