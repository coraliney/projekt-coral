import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  HStack,
  IconButton,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import image from "../assets/bg13.jpg";

function Contact() {
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
        w="90%"
        maxW="600px"
        bgColor="rgba(255, 255, 255, 0.8)"
        p="8"
        borderRadius="md"
        boxShadow="lg"
      >
        <VStack spacing="6">
          <Heading as="h1" size="2xl" textAlign="center">
            Contact us
          </Heading>

          <FormControl>
            <FormLabel htmlFor="name">Full Name</FormLabel>
            <Input
              name="name"
              placeholder="Enter full name..."
              type="text"
              borderColor="black"
              focusBorderColor="green.400"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              name="email"
              placeholder="Enter email..."
              type="email"
              focusBorderColor="green.400"
              borderColor="black"

            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              borderColor="black"
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
              focusBorderColor="green.400"
            />
          </FormControl>

          <Button type="submit" colorScheme="green" w="100%">
            Send Message
          </Button>

        </VStack>
      </Box>
    </Box>
  );
}

export default Contact;
