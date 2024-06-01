import { Box } from '@chakra-ui/react';
import './Loading.css'
const TableLoader = () => {
    return (
        <Box w={'100vw'} h={'50vh'}>
            <div className="loader">
                <div className="justify-content-center jimu-primary-loading"></div>
            </div>
        </Box>

    );
};

export default TableLoader;