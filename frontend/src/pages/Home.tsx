import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import image from "../assets/bg7.jpg";

function Home() {
  return (
    <Flex
      className="home"
      direction="column"
      justify="center"
      align="center"
      h="100vh"
      bgImage={image}
      bgSize="cover"
      bgPosition="center"
      color="white"
      px={{ base: "4", md: "8" }}
    >
      <Box textAlign="center" maxW="2xl">
        <Heading as="h1" color="black" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mb="5">
          Hitchhike Adventures Await!
        </Heading>
        <Text fontSize={{ base: "md", md: "lg"  }} mb="6" color="black">
          Explore the world with our community of private drivers. Your journey begins here.
        </Text>
        <Link to="/search">
          <Button colorScheme="green" size="lg" _hover={{ bg: "black" }}>
            Search Now
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}

export default Home;