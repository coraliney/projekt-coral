import React from 'react';
import { Box, Flex, IconButton, Input, Link, Stack, Text } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <Box className="footer" bg="gray.800" color="white" py="9" textAlign="center">
      <Text>&copy; 2024 Hitchhike.com</Text>
      <Stack direction="row" spacing="4" justify="center" mt="4">
        <IconButton
          icon={<FaFacebook />}
          aria-label="Facebook"
          color="green.400"
          size="lg"
          variant="ghost"
        />
        <IconButton
          icon={<FaTwitter />}
          aria-label="Twitter"
          color="green.400"
          size="lg"
          variant="ghost"
        />
        <IconButton
          icon={<FaInstagram />}
          aria-label="Instagram"
          color="green.400"
          size="lg"
          variant="ghost"
        />
      </Stack>
      <Flex justify="center" mt="4">
        <Link mr="4">Privacy Policy</Link>
        <Link>Terms of Service</Link>
      </Flex>
      <Flex justify="center" mt="4">
        <Input placeholder="Your email address" maxW="md" />
        <IconButton
          icon={<FaEnvelope />}
          aria-label="Subscribe"
          color="green.400"
          ml="2"
        />
      </Flex>
    </Box>
  );
}

export default Footer;
