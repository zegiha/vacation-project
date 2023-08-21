import React from 'react';
import Header from "../components/Header";
import Cover from "../components/Mainpage/Cover";
import Introduce from "../components/Mainpage/Introduce";
import Footer from "../components/Footer";

const Mainpage = () => {
  const ref = React.useRef(null);
  function gotoScroll() {
    if(ref !== null) {
      const { offsetTop } = ref.current;
      window.scrollTo({ behavior: "smooth", top: offsetTop - 50});
    }
  }
  return (
    <>
      <Header/>
      <Cover sc={gotoScroll}/>
      <Introduce scRef={ref}/>
      <Footer/>
    </>
  );
};

export default Mainpage;