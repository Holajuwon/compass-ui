import React from "react";
import { Heading } from "@chakra-ui/core";
import Layout from "../components/Layout";
import { RegisterForm } from "../components/RegisterForm";

export default () => {
  return (
    <Layout>
      <Heading>Registeration Form</Heading>
      <RegisterForm />
    </Layout>
  );
};
