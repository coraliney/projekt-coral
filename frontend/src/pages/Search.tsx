import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';

const center = { lat: 62.00, lng: 15.00 };

function Search() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `AIzaSyAcNrxg-PF9xIC7KBinHz6PDSO-vAWjClA`, // API-KEY
    libraries: ['places'],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [users, setUsers] = useState([]);

  const originRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch('http://localhost:3000/api/users');
        const userData = await response.json();
        /*         console.log(userData); */
        setUsers(userData);
        /*         console.log(users); */
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, []);

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute() {
    if (!originRef.current || !destinationRef.current || originRef.current.value === '' || destinationRef.current.value === '') {
      return;
    }

    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    if (originRef.current) originRef.current.value = '';
    if (destinationRef.current) destinationRef.current.value = '';
  }

  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      minHeight='100vh'
      width='100%'
    >
      <Box width='50%' height='70vh' maxWidth='100vw' margin='1%' position='relative' border='solid 5px' borderRadius='3px' borderColor='#78C69E'>

        <Box
          p={4}
          borderRadius='lg'
          m={4}
          bgColor='white'
          shadow='base'
          width='90%'
          maxWidth='400px'
          position='absolute'
          top='1rem'
          left='1rem'
          zIndex='1'
        >
          <HStack spacing={2} justifyContent='space-between'>
            <Box flex={1}>
              <Autocomplete>
                <Input type='text' placeholder='From:' ref={originRef} />
              </Autocomplete>
            </Box>
            <Box flex={1}>
              <Autocomplete>
                <Input
                  type='text'
                  placeholder='To:'
                  ref={destinationRef}
                />
              </Autocomplete>
            </Box>

            <ButtonGroup>
              <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
                Search Roadmap
              </Button>
              <IconButton
                aria-label='center back'
                icon={<FaTimes />}
                onClick={clearRoute}
              />
            </ButtonGroup>
          </HStack>
          <HStack spacing={4} mt={4} justifyContent='space-between'>
            <Text>Distance: {distance} </Text>
            <Text>Duration: {duration} </Text>
            <IconButton
              aria-label='center back'
              icon={<FaLocationArrow />}
              isRound
              onClick={() => {
                if (map) {
                  map.panTo(center);
                  map.setZoom(15);
                }
              }}
            />
          </HStack>
        </Box>

        {/* Map */}
        <GoogleMap
          center={center}
          zoom={7}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map as google.maps.Map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>

      { }
      <Box mt={8} width='50%' bg='green.100' p={4} borderRadius='md'>
        <Text fontSize='xl' fontWeight='bold' color='green.400'>Available people to hitchhike with:</Text>
        {users.map(user => (
          <Box key={user.id} bg='gray.100' p={4} my={2} borderRadius='md'>
            <Text fontWeight='bold'>Owner: {user.firstNameRef}</Text>
            <Text>Car to ride with: {user.car}</Text>
            <Text>Get in touch: {user.email}</Text>
            <Text>Destination from: {user.destionationFrom}</Text>
            <Text>Destination to: {user.destinationToRef}</Text>
            {/* Expand with more userdetails here, make it work at first..  */}
          </Box>
        ))}
      </Box>
    </Flex>
  );
}

export default Search;
