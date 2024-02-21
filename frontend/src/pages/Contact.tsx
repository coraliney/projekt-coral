import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import image from "../assets/bg13.jpg";

const Contact = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9m8lhic", "template_cpf6nlh", form.current, {
        publicKey: "zuxuHPqG2-_rU1ILe",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowAlert(true);
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const closeAlert = () => {
    setShowAlert(false);
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
        w="90%"
        maxW="600px"
        bgColor="rgba(255, 255, 255, 0.8)"
        p="8"
        borderRadius="md"
        boxShadow="lg"
      >
        <VStack spacing="6" as="form" ref={form} onSubmit={sendEmail}>
          <Heading as="h1" size="2xl" textAlign="center">
            Contact us
          </Heading>

          <FormControl>
            <FormLabel htmlFor="name">Full Name</FormLabel>
            <Input
              name="user_name"
              placeholder="Enter full name..."
              type="text"
              borderColor="black"
              focusBorderColor="green.400"
              value={formData.user_name}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              name="user_email"
              placeholder="Enter email..."
              type="email"
              focusBorderColor="green.400"
              borderColor="black"
              value={formData.user_email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
            />
          </FormControl>

          <Button type="submit" colorScheme="green" w="100%">
            Send Message
          </Button>
        </VStack>
      </Box>
      <AlertDialog
        isOpen={showAlert}
        onClose={closeAlert}
        motionPreset="slideInBottom"
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Thanks for your email!</AlertDialogHeader>
          <AlertDialogBody>
            I'll come back to you soon!<br />
            Sincerely,<br />
            Caroline
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={closeAlert}>Close</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box >
  );
};

export default Contact;
