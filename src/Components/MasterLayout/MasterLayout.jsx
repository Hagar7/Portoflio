import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {Container,Title,Main} from './style/style'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function MasterLayout() {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setloading(true)
    setTimeout(() => setloading(false), 2000)
  }, []);
 
  return (
   <Main>
    {loading?
     <Container>
      <Title>Hagar Ahmed</Title>
     </Container>:
     <>
      <Navbar />
      <Outlet></Outlet>
    <Footer />
    </>
     }
   
   </Main>
  );
}
