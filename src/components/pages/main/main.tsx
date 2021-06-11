import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../header/header";
import Contacts from "../../contacts/contacts";
import Form from "../../form/form";
import Paginate from "../../UI/paginate/paginate";
import withError from "../../../hocs/with-error/with-error";
import { getActiveContacts } from "../../../store/selectors";
import { CONTACTS_PER_PAGE } from "../../../const";

const Main: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const contacts = useSelector(getActiveContacts);
  const offset = currentPage * CONTACTS_PER_PAGE;
  const currentContacts = contacts.slice(offset, offset + CONTACTS_PER_PAGE);
  const pageCount = Math.ceil(contacts.length / CONTACTS_PER_PAGE);

  return (
    <>
      <Header onOpen={setIsOpen} />
      <main className="main">
        {isOpen && <Form onOpen={setIsOpen} />}
        <Contacts contacts={currentContacts} onSort={setCurrentPage} />
        <Paginate
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={setCurrentPage}
        />
      </main>
    </>
  );
};

export default withError(Main);
