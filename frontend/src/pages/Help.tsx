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
    <Box className="contact"
      minH="100vh"
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      justifyContent="center"
      alignItems="center">
      <Box maxW="800px" mx="auto" mt="4" borderRadius="xl"
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
            <ListItem>2. Explore the list below for who is available to hitchhike with, wheter you have a car or not.</ListItem>
            <ListItem>3. Contact the driver or hitchhiker for car-pooling.</ListItem>
          </List>

          <Heading as="h2" size="lg" color="black" mb="4">
            Contacting private drivers
          </Heading>
          <Text mb="4">
            After finding a private driver you are interested in, you can contact them in the following way:
          </Text>
          <List pl="5" mb="4">
            <ListItem> 1. Use the provided contact information to communicate with the driver, in this case you will find their email.</ListItem>
          </List>

          <Heading as="h2" size="lg" color="black" mb="4">
            FAQs (Frequently Asked Questions)
          </Heading>

          <Accordion allowMultiple border="grey" >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    How do I know that the driver/hitchhiker is reko?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                We always conduct a safety check on everyone who becomes a member with us.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What if I want to cancel a trip?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                If you cancel your trip within 24 hours, you will be liable to pay the person you were supposed to travel with. Otherwise, you will not be charged for the trip.
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

