import { useForm } from 'react-hook-form'
import {
    FormLabel,
    FormControl,
    Input,
    Button,
    Box,
    FormErrorMessage,
    Image,
    Text
} from '@chakra-ui/react'

import './LogIn.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    function onSubmit(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(values);
                const AuthUser = { email: values.email, password: values.password }
                const AuthUserStringify = JSON.stringify(AuthUser)
                localStorage.setItem('AuthUser', AuthUserStringify)
                navigate('/')
                resolve()
            }, 1000)
        })
    }
    // const { colorMode } = useColorMode()

    return (
        // color={colorMode === 'light' ? 'blue' : 'white'} 
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} width={'100vw'} height={'100vh'} >
            <Box w={[250, 300, 600]} shadow={'xl'} rounded={'20px'}>
                <Box display={'flex'} gap={'6px'} alignItems={'center'} justifyContent={'center'} backgroundColor={'#0039a6'} p={[10]} roundedBottom={'100px'}>
                    <Image w={[8, 8, 8]} src="https://cdn-icons-png.flaticon.com/128/4281/4281866.png" />
                    <Text fontSize={[25]} fontWeight={600} color={'white'}>
                        Log In
                    </Text>
                </Box>
                <Box p={[4, 10, 10]} >
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <FormControl isInvalid={errors.email}>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <Input
                                type='email'
                                id='email'
                                placeholder='Email'
                                {...register('email', {
                                    required: 'Email is required',
                                    minLength: {
                                        value: 4,
                                        message: 'Minimum length should be 4',
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Invalid email address',
                                    }
                                })}
                            />
                            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.password}>
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <Input
                                type='password'
                                id='password'
                                placeholder='Password'
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters long',
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message: 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character',
                                    },
                                })}
                            />
                            <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                        </FormControl>
                        <Button mt={4} backgroundColor={'#0039a6'} isLoading={isSubmitting} type='submit' textColor={'white'}>
                            Submit
                        </Button>

                    </form>
                </Box>

            </Box>
        </Box>


    );
};

export default Login;