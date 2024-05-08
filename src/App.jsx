import React from "react";

import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div className=''>
      <Header />
      {/* <div className='divider'></div> */}
      <main className='min-h-screen container mx-auto '>
        <div className='flex justify-center my-5'>
          <Search />
        </div>
        <div className='grid grid-cols-4 gap-5 '>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Modal />
      </main>
      <Footer />
    </div>
  );
};

export default App;
