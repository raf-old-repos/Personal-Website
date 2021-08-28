import Head from "next/head";
import Card from "../components/Card";
import React from "react";
import MainLayout from "../layouts/main.layout";

const Home = () => {
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

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Card MainHeader="Rafayel Amirkhanyan"></Card>
      </MainLayout>
    </React.Fragment>
  );
};

export default Home;
