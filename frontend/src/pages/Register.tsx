import React from 'react';
import { useRef } from "react";
import { Link } from 'react-router-dom';
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../assets/bg13.jpg";

const Register = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const Notify = () => { 
        toast("Registered Successfully!"); 
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:3000/api/register`, { 
                name: firstNameRef.current.value,
                lastname: lastNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value, 
            });
            Notify();
            firstNameRef.current.value = "";
            lastNameRef.current.value = "";
            emailRef.current.value = "";
            passwordRef.current.value = "";
        } catch (error) {
            console.log(error);
            console.log("Could not register");
            toast("Register Succesfully, choose another one!");
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
            alignItems="center">
            <Box
                w="90%"
                maxW="500px"
                bgColor="rgba(255, 255, 255, 0.8)"
                p="8"
                borderRadius="xl"
                boxShadow="lg"
            >
                <VStack spacing="6">
                    <Heading as="h1" size="2xl" textAlign="center" >
                        Register
                    </Heading>
                    <form onSubmit={handleSubmit}>
                        <FormControl id="firstName" mt="4" >
                            <FormLabel >First Name</FormLabel>
                            <Input
                                type="text"
                                name="firstName"
                                ref={firstNameRef}
                                focusBorderColor="green.400"
                                borderColor="green.400"
                            />
                        </FormControl>
                        <FormControl id="lastName" mt="4" >
                            <FormLabel>Last Name</FormLabel>
                            <Input
                                type="text"
                                name="lastName"
                                id="lastname"
                                ref={lastNameRef}
                                focusBorderColor="green.400"
                                borderColor="green.400"
                            />
                        </FormControl>
                        <FormControl id="email"  mt="4" >
                            <FormLabel>Email Address</FormLabel>
                            <Input
                                type="email"
                                name="email"
                                ref={emailRef}
                                focusBorderColor="green.400"
                                borderColor="green.400"
                            />
                        </FormControl>
                        <FormControl id="password"  mt="4">
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                name="password"
                                ref={passwordRef}
                                focusBorderColor="green.400"
                                borderColor="green.400"
                            />
                        </FormControl>

                        <Button type="submit" colorScheme="green" w="100%" mt="5">
                            Register
                        </Button> 
                        <Link to="/login" >
                        <Button background="grey" color="white" colorScheme="green"  w="100%"  mt="4">Go to Sign In</Button>
                    </Link>
                    </form>
                   
                    <ToastContainer />
                </VStack>
            </Box>
        </Box>
    );
};

export default Register;

