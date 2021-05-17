import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../header/header';
import Contacts from '../../contacts/contacts';
import Form from '../../form/form';
import Paginate from '../../UI/paginate/paginate';
import { RootState } from '../../../store/reducer';
import { CONTACTS_PER_PAGE } from '../../../const';

const Main: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { contacts } = useSelector((state: RootState) => state);
  const pageCount = Math.ceil(contacts.length / CONTACTS_PER_PAGE);
  const offset = currentPage * CONTACTS_PER_PAGE;
  const currentContacts = contacts.slice(offset, offset + CONTACTS_PER_PAGE);

  return (
    <>
      <Header />
      <main className="main">
        <Form />
        <Contacts contacts={currentContacts} />
        <Paginate pageCount={pageCount} onPageChange={setCurrentPage} />
      </main>
    </>
  );
};

export default Main;
