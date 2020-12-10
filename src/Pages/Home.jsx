import React from "react";
import Layout from "../components/Layout";
import { Home } from "../components/Home";
import { HomeCards } from "../components/HomeCards";
import { Flex } from "@chakra-ui/react";
import { HomeForm } from "../components/HomeForm";
import { HomeAside } from "../components/HomeAside";
import { FaEdit, FaMoon, FaStar, FaSun } from "react-icons/fa";

export default () => {
  let content = [
    {
      title: "",
      body: "",
      icon: "",
      bg: "",
    },
    {
      title: "Business",
      body:
        "Popular news from best source and creators. Your digital world in one place.",
      bg: "#e9f5f4",
    },
    {
      title: "Startups",
      body:
        "Popular news from best source and creators. Your digital world in one place.",
      bg: "#d1dffd",
    },
    {
      title: "Design",
      body:
        "Popular news from best source and creators. Your digital world in one place.",
      bg: "#fddfdd",
    },
    {
      title: "Blog",
      body:
        "Popular news from best source and creators. Your digital world in one place.",
      bg: "#f2eae0",
    },
    {
      title: "Blog",
      body:
        "Popular news from best source and creators. Your digital world in one place.",
      bg: "#f2eae0",
    },
    {
      title: "Blog",
      body:
        "Popular news from best source and creators. Your digital world in one place.",
      bg: "#f2eae0",
    },
  ];

  return (
    <Layout>
      <Home />
      <Flex justify="space-around" w="100%" overflowX="auto" flexWrap="auto">
        {content.map((item, index) => (
          <HomeCards card={item} key={index} />
        ))}
      </Flex>
      <HomeForm />
      <HomeAside />
    </Layout>
  );
};
