import React, { createRef } from 'react';
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
    Text,
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
    const carRef = useRef();
    const destinationFromRef = useRef();
    const destinationToRef = useRef();

    const Notify = () => {
        toast("Registered Successfully!");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:3000/api/register`, {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                car: carRef.current.value,
                destinationFrom: destinationFromRef.current.value,
                destinationTo: destinationToRef.current.value,
            });
            Notify();
            firstNameRef.current.value = "";
            lastNameRef.current.value = "";
            emailRef.current.value = "";
            passwordRef.current.value = "";
            carRef.current.value = "";
            destinationFromRef.current.value = "";
            destinationToRef.current.value = "";
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
                    <Box bg="green.100" p={4} borderRadius="md">
                        <Text>Fill in all fields below to register as a car owner and/or hitchhiker.
                            When you provide your car and destination, carpooling can occur.
                            If you do not provide a car, you will be registered only as a hitchhiker.
                            You will see both car owners and hitchhikers under 'Search', where you can find contact information for both parties."</Text>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <FormControl id="firstName" mt="4" >
                            <FormLabel >First Name:</FormLabel>
                            <Input
                                type="text"
                                name="firstName"
                                placeholder="Your name"
                                ref={firstNameRef}
                                focusBorderColor="green.400"
                                borderColor="green.400"
                            />
                        </FormControl>
                        <FormControl id="lastName" mt="4" >
                            <FormLabel>Last Name:</FormLabel>
                            <Input
                                type="text"
                                name="lastName"
                                placeholder="Yourlastname"
                                id="lastname"
                                ref={lastNameRef}
                                focusBorderColor="green.400"
                                borderColor="green.400"
                            />
                        </FormControl>
                        <FormControl id="car" mt="4" >
                            <FormLabel>Type of Car:</FormLabel>
                            <Input
                                type="text"
                                placeholder="Leave blank if no car"
                                name="car"
                                id="car"
                                ref={carRef}
                                focusBorderColor="green.400"
                                borderColor="green.400"
                            />
                        </FormControl>
                        <FormControl id="destinationFrom" mt="4" >
                            <FormLabel>Destination From:</FormLabel>
                            <Input
                                type="text"
                                name="destinationFrom"
                                placeholder="ex. Stockholm"
                                id="destinationFrom"
                                ref={destinationFromRef}
                                focusBorderColor="green.400"
                                borderColor="green.400"
                            />
                        </FormControl>
                        <FormControl id="destinationTo" mt="4" >
                            <FormLabel>Destination To:</FormLabel>
                            <Input
                                type="text"
                                name="destinationTo"
                                placeholder="ex. Gothenburg"
                                id="destinationTo"
                                ref={destinationToRef}
                                focusBorderColor="green.400"
                                borderColor="green.400"
                            />
                        </FormControl>
                        <FormControl id="email" mt="4" >
                            <FormLabel>Email Address</FormLabel>
                            <Input
                                type="email"
                                placeholder="youremail@email.com"
                                name="email"
                                ref={emailRef}
                                focusBorderColor="green.400"
                                borderColor="green.400"
                            />
                        </FormControl>
                        <FormControl id="password" mt="4">
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                placeholder="least 8 characters long.."
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
                            <Button background="grey" color="white" colorScheme="green" w="100%" mt="4">Go to Sign In</Button>
                        </Link>
                    </form>

                    <ToastContainer />
                </VStack>
            </Box>
        </Box>
    );
};

export default Register;

