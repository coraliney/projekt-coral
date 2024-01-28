import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Heading,
} from '@chakra-ui/react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from '../assets/bg13.jpg';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();


  const Notify = () => {
    toast('Logged In Successfully!');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/login`, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      Notify();
      emailRef.current.value = '';
      passwordRef.current.value = '';
      
      // Después del inicio de sesión exitoso, navega a la página deseada
      navigate('/');
    } catch (error) {
      console.log(error);
      console.log('Could not login');
      toast('Invalid credentials. Please try again.');
    }
  };

  return (
    <Box
      minH="100vh"
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w={{ base: '90%', md: '50%' }}
        maxW="500px"
        bgColor="rgba(255, 255, 255, 0.8)"
        p="8"
        borderRadius="xl"
        boxShadow="lg"
      >
        <VStack spacing="6">
          <Heading as="h1" size="2xl" textAlign="center">
            Login
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="email" mt="4">
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                name="email"
                ref={emailRef}
                focusBorderColor="green.400"
                borderColor="green.400"
                bg="white"
                size="lg"
              />
            </FormControl>
            <FormControl id="password" mt="4">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                ref={passwordRef}
                focusBorderColor="green.400"
                borderColor="green.400"
                bg="white"
                size="lg"
              />
            </FormControl>

            <Button type="submit" colorScheme="grey" background="green"w="100%" mt="5">
              Login
            </Button>
            <Link to="/register">
              <Button  background="grey" color="white" colorScheme="green"  w="100%" mt="4">
                Go to Register
              </Button>
            </Link>
          </form>

          <ToastContainer />
        </VStack>
      </Box>
    </Box>
  );
};

export default Login;
