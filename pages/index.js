import React from "react";
//import Navigation from "../components/navigation";
import Head from "next/head";
import Container from "../components/Container";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Next.js Project - Home</title>
      </Head>
      <Container>
        <h1>Index</h1>
      </Container>
    </div>

    //<Navigation/> ya no lo necesitamos al usar Container
  );
};

export default Index;
