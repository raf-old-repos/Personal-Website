import Head from "next/head";
import Card from "../components/Card";
import React from "react";
import MainLayout from "../layouts/main.layout";
import { Link } from "../components/Link";

const Home = () => {
  const links: Array<Link> = [
    {
      name: "Instagram",
      icon: "insta",
      url: "https://www.instagram.com/rafayel.19/",
    },
    {
      name: "Github",
      icon: "github",
      url: "https://github.com/Gitter499",
    },
    {
      name: "Discord",
      icon: "discord",
      url: "https://discord.com/"
    },
    {
      name: "Facebook",
      icon: "facebook",
      url: "https://www.facebook.com/rafayel.amirkhanyan/",
    },
  ];
  return (
    <React.Fragment>
      <Head>
        <title>Rafayel Amirkhanyan</title>
        <meta property="og:title" content="Rafayel Amirkhanyan" />
        <meta property="og:site_name" content="Rafayel Amirkhanyan Portfolio" />
        <meta property="og:url" content="https://rafayel.codes/" />
        <meta
          property="og:description"
          content="Hi! My name is Rafayel Amirkhanyan and here is my home on the internet!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Card mainheader="Rafayel Amirkhanyan" links={links} iconURL="https://github.com/Gitter499.png" />
      </MainLayout>
    </React.Fragment>
  );
};

export default Home;
