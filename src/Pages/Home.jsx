import React from "react";
import Layout from "../components/Layout";
import { Home } from "../components/Home";
import { HomeCards } from "../components/HomeCards";
import { Flex } from "@chakra-ui/core";
import { HomeForm } from "../components/HomeForm";
import { HomeAside } from "../components/HomeAside";

export default () => {
  let content = [
    {
      title: "",
      body:
        "",
      icon: "",
      bg: "",
    },
    {
      title: "Business",
      body:
        "Popular news from best source and creators. Your digital world in one place.",
      icon: "star",
      bg: "#e9f5f4",
    },
    {
      title: "Startups",
      body:
        "Popular news from best source and creators. Your digital world in one place.",
      icon: "sun",
      bg: "#d1dffd",
    },
    {
      title: "Design",
      body:
        "Popular news from best source and creators. Your digital world in one place.",
      icon: "moon",
      bg: "#fddfdd",
    },
    {
      title: "Blog",
      body:
        "Popular news from best source and creators. Your digital world in one place.",
      icon: "edit",
      bg: "#f2eae0",
    },
    {
      title: "Blog",
      body:
        "Popular news from best source and creators. Your digital world in one place.",
      icon: "edit",
      bg: "#f2eae0",
    },
    {
      title: "Blog",
      body:
        "Popular news from best source and creators. Your digital world in one place.",
      icon: "edit",
      bg: "#f2eae0",
    },
  ];

  return (
    <Layout>
      <Home />
      <Flex
        justify="space-around"
        ml="200px"
        mr="200px"
        w="100%"
        overflowX='auto'
        flexWrap='nowrap'
      >
        {content.map((item, index) => (
          <HomeCards card={item} key={index} />
        ))}
      </Flex>
      <HomeForm />
      <HomeAside />
    </Layout>
  );
};
