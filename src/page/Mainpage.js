import React from 'react';
import Header from "../components/Mainpage/Header";
import Cover from "../components/Mainpage/Cover";
import Illegal from "../components/Mainpage/Illegal";
import Punish from "../components/Mainpage/Punish";

const Mainpage = () => {
  return (
    <>
      <Header/>
      <Cover/>
      <Illegal/>
      <Punish/>
    </>
  );
};

export default Mainpage;