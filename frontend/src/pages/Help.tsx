import React from 'react';
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link as ChakraLink,
  Button,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import image from "../assets/bg13.jpg";


const Help: React.FC = () => {
  return (
    <Box  className="contact"
    minH="100vh"
    backgroundImage={`url(${image})`}
    backgroundSize="cover"
    backgroundPosition="center"
    display="flex"
    justifyContent="center"
    alignItems="center">
    <Box maxW="800px" mx="auto" mt="4"  borderRadius="xl"  
        bgColor="rgba(255, 255, 255, 0.8)"
        boxShadow="lg" p="6" m="9">
      <Heading as="h1" size="xl" textAlign="center" color="black" mb="4">
        Help Center
      </Heading>
      <Text fontSize="lg" textAlign="center" mb="6" color="black">
        Welcome to our help center. Here you will find information on how to use our service.
      </Text>

      <Box >
        <Heading as="h2" size="lg" color="black" mb="4">
          How to use the search function?
        </Heading>
        <Text mb="4">
          To search for your destination and find potential private drivers, follow these steps:
        </Text>
        <List pl="5" mb="4">
          <ListItem>1. Go to the search page.</ListItem>
          <ListItem>2. Enter your destination in the search field.</ListItem>
          <ListItem>3. Explore the list of available private drivers for your route.</ListItem>
        </List>

        <Heading as="h2" size="lg" color="black" mb="4">
          Contacting private drivers
        </Heading>
        <Text mb="4">
          After finding a private driver you are interested in, you can contact them in the following way:
        </Text>
        <List pl="5" mb="4">
          <ListItem> 1. Click on the driver's profile to see more details.</ListItem>
          <ListItem> 2. Use the provided contact information to communicate with the driver.</ListItem>
          <ListItem> 3. Coordinate the details of the trip and enjoy your journey together.</ListItem>
        </List>

        <Heading as="h2" size="lg" color="black" mb="4">
          FAQs (Frequently Asked Questions)
        </Heading>

        <Accordion allowMultiple border="grey" >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How can I reset my password?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions sent to your email to reset your password.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How do I update my profile information?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              To update your profile information, go to your profile page and click on the "Edit Profile" button. Make the necessary changes and save your updated information.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          What payment methods do you accept?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      We accept payments via credit card, debit card, PayPal, and bank transfer. Please note that payment methods may vary depending on your location.
    </AccordionPanel>
  </AccordionItem>
        </Accordion>
      </Box>

      <Box mt="6" textAlign="center">
        <ChakraLink as={RouterLink} to="/contact">
          <Button
            background="green.400"
            color="white"
            size="lg"
            _hover={{ bg: "black" }}
            boxShadow="md"
            transition="transform 0.3s ease-in-out"
            _active={{ transform: 'scale(0.95)' }}
          >
            Go to the contact page
          </Button>
        </ChakraLink>
      </Box>
    </Box>
    </Box>
  );
};

export default Help;

