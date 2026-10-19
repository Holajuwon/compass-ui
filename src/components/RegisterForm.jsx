import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { fetchCountries, fetchStates, registerUser } from "./api";

const initialForm = {
  firstName: "",
  lastName: "",
  phone: "",
  country: "",
  countryCode: "",
  state: "",
  email: "",
  password: "",
};

export const RegisterForm = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [loadingStates, setLoadingStates] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [registered, setRegistered] = useState(false);
  const toast = useToast();
  const statesRequest = useRef(0);

  useEffect(() => {
    let active = true;
    fetchCountries()
      .then((data) => {
        if (active && Array.isArray(data)) setCountries(data);
      })
      .catch(() => {
        if (active) {
          toast({ title: "Location list unavailable", description: "You can still complete the other fields.", status: "warning", duration: 4000, isClosable: true });
        }
      })
      .finally(() => {
        if (active) setLoadingCountries(false);
      });
    return () => {
      active = false;
    };
  }, [toast]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleCountryChange = async (event) => {
    const countryCode = event.target.value;
    const country = countries.find((item) => item.country_short_name === countryCode);
    const requestId = ++statesRequest.current;
    setFormData((current) => ({
      ...current,
      country: country ? country.country_name : "",
      countryCode,
      state: "",
    }));
    setStates([]);
    if (!country) return;

    setLoadingStates(true);
    try {
      const data = await fetchStates(country.country_name);
      if (requestId === statesRequest.current) setStates(Array.isArray(data) ? data : []);
    } catch (error) {
      if (requestId === statesRequest.current) {
        toast({ title: "Regions could not be loaded", description: "You can still continue without selecting one.", status: "warning", duration: 4000, isClosable: true });
      }
    } finally {
      if (requestId === statesRequest.current) setLoadingStates(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const data = await registerUser(formData);
      if (!data) throw new Error("Registration was not accepted");
      setRegistered(true);
    } catch (error) {
      toast({ title: "We couldn't create your account", description: "Check your details and try again.", status: "error", duration: 4500, isClosable: true });
    } finally {
      setSubmitting(false);
    }
  };

  if (registered) {
    return (
      <Alert status="success" alignItems="flex-start" borderRadius="4px" p={6}>
        <AlertIcon mt={1} />
        <Box>
          <Heading as="h2" fontSize="xl">You're on the list.</Heading>
          <Text mt={2}>Your Compass account has been created. Start exploring the journal or share a story of your own.</Text>
        </Box>
      </Alert>
    );
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={6} align="stretch">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          <FormControl isRequired>
            <FormLabel htmlFor="firstName">First name</FormLabel>
            <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} autoComplete="given-name" bg="white" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="lastName">Last name</FormLabel>
            <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} autoComplete="family-name" bg="white" />
          </FormControl>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" bg="white" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="phone">Phone number</FormLabel>
            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} autoComplete="tel" bg="white" />
          </FormControl>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          <FormControl>
            <FormLabel htmlFor="country">Country</FormLabel>
            <Select id="country" name="countryCode" value={formData.countryCode} onChange={handleCountryChange} placeholder={loadingCountries ? "Loading countries..." : "Choose a country"} isDisabled={loadingCountries} bg="white">
              {countries.map((country) => (
                <option key={country.country_short_name} value={country.country_short_name}>{country.country_name}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="state">State or region</FormLabel>
            <Select id="state" name="state" value={formData.state} onChange={handleChange} placeholder={loadingStates ? "Loading regions..." : "Choose a region"} isDisabled={!states.length || loadingStates} bg="white">
              {states.map((state) => (
                <option key={state.state_name} value={state.state_name}>{state.state_name}</option>
              ))}
            </Select>
          </FormControl>
        </SimpleGrid>

        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} autoComplete="new-password" minLength={8} bg="white" />
          <Text mt={2} color="gray.500" fontSize="xs">Use at least 8 characters.</Text>
        </FormControl>

        <Button type="submit" isLoading={submitting} loadingText="Creating account" size="lg" bg="ink" color="white" borderRadius="full" alignSelf="flex-start" px={8} _hover={{ bg: "green.800", transform: "translateY(-1px)" }}>
          Create account
        </Button>
      </VStack>
    </Box>
  );
};
