import React from 'react';
import Header from '../../header/header';
import Contacts from '../../contacts/contacts';
import Form from '../../form/form';

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Form />
        <Contacts />
      </main>
    </>
  );
};

export default Main;
