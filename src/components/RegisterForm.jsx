import React, { useEffect, useState } from "react";
import { fetchCountries, fetchStates, registerUser } from "./api";

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";

export const RegisterForm = () => {
  const [countries, setCountries] = useState("");
  const [states, setStates] = useState("");
  const [formData, setFormData] = useState();
  const [response, setResponse] = useState();

  const handleOnCountry = async (e) => {
    let { name, value } = e.target;
    value = JSON.parse(value);
    const data = await fetchStates(value.country_name);
    setStates(data);
    setFormData({
      ...formData,
      country: value.country_name,
      countryCode: value.country_short_name,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const data = await registerUser(formData);
      setResponse(data);
      window.scroll(0, 10000);
      setFormData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(async () => {
      const data = await fetchCountries();
      setCountries(data);
    }, 1000);
  }, []);

  return (
    <Stack>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel htmlFor="First Name">First Name</FormLabel>
        <Input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <FormLabel htmlFor="Last Name">Last Name</FormLabel>
        <Input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <FormLabel htmlFor="Phone">Phone Number</FormLabel>
        <Input
          name="phone"
          placeholder="Phone number"
          onChange={handleChange}
        />

        <FormLabel htmlFor="country">Country</FormLabel>
        <Select
          id="country"
          placeholder="Select country"
          name="country"
          onChange={handleOnCountry}
          color="black"
        >
          {countries &&
            countries.map((country, index) => (
              <option value={JSON.stringify(country)} key={index}>
                {country.country_name}
              </option>
            ))}
        </Select>

        {states && (
          <>
            <FormLabel htmlFor="state">State</FormLabel>
            <Select
              id="country"
              placeholder="Select state"
              name="state"
              onChange={handleChange}
              color="black"
            >
              {React.Children.toArray(
                states.map((state, index) => (
                  <option value={state.state_name}>{state.state_name}</option>
                ))
              )}
            </Select>
          </>
        )}
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          name="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
        />
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Register</Button>
      </FormControl>
      {response && (
        <Stack>
          <Divider borderColor="black" ml="40px" mr="40px" mb="30px" />
          <Heading color="green.500">Registeration Successful</Heading>
          <Box
            ml="20px"
            mr="20px"
            whiteSpace="pre"
            h="80vh"
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            borderWidth="2px"
            rounded="sm"
            p="20px"
            bg="grey.900"
          >
            <Text fontSize="25px" textAlign="center">
              Your Data
            </Text>
            <Text fontSize="15px">
              <b>Firstname:</b> {response.firstName}
            </Text>
            <Text fontSize="15px">
              <b>Lastname: </b>
              {response.lastName}
            </Text>
            <Text fontSize="15px">
              <b>Email: </b>
              {response.email}
            </Text>
            <Text fontSize="15px">
              <b>Phone: </b>
              {response.phone}
            </Text>
            <Text fontSize="15px">
              <b>Country: </b>
              {response.country}
            </Text>
            <Text fontSize="15px">
              <b>State: </b>
              {response.state}
            </Text>
            <Text fontSize="15px">
              <b>UserID:</b> {response.userId}
            </Text>
          </Box>
        </Stack>
      )}
    </Stack>
  );
};
