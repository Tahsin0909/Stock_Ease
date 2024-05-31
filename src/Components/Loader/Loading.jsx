import { Box } from '@chakra-ui/react';
import './Loading.css'


const Loading = () => {
    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} w={'100vw'} h={'100vh'}>
            <div className="loading-wave">
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
            </div>
        </Box>
    );
};

export default Loading;