/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Search from "./components/Search";
import { getAllContacts } from "./redux/contactSlice";
import { ToastContainer } from "react-toastify";

const App = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.contact);
  const { isOpen } = useSelector((state) => state.modalContact);

  useEffect(() => {
    dispatch(getAllContacts());

    return () => {};
  }, []);

  return (
    <div className=''>
      <Header />
      <main className='min-h-screen container mx-auto '>
        <div className='flex justify-center my-5'>
          <Search />
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 '>
          {data.map((contact, index) => {
            return (
              <Card
                id={contact?.id}
                avatar={contact?.photo}
                firstName={contact.firstName}
                lastName={contact.lastName}
                age={contact?.age}
                key={index}
              />
            );
          })}
        </div>
        {isOpen ? <Modal /> : null}
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
