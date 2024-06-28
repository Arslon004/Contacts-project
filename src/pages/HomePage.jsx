import React, { Component } from 'react'
import { v4 } from 'uuid';
import { Container } from 'react-bootstrap'
import { ContactForm } from '../components/form/ContactForm'
import { ContactHeader } from '../components/header/ContactHeader'
import { ContactFooter } from '../components/footer/ContactFooter'
import Categories from '../components/categories/Categories'
import { toast } from 'react-toastify';



export class HomePage extends Component {
  state = {
    contacts: [
      {
        id: "1",
        firstname: "Ibrohim",
        lastname: "Bozorov",
        phone: "+998 88 805 88 99",
        importance: "family",
        isFavorite: true
      },
      {
        id: "2",
        firstname: "Erali",
        lastname: "Ergashev",
        phone: "+998 93 604 23 07",
        importance: "friend",
        isFavorite: false
      },
      {
        id: "3",
        firstname: "Abulfayz",
        lastname: "Almanov",
        phone: "+998 88 889 88 99",
        importance: "relative",
        isFavorite: false
      }
    ],
    contact: {
      firstname: "",
      lastname: "",
      phone: "",
      importance: "family",
    },
    validated: false,
    selected: null,
  }
  render() {
    const { contacts, validated, contact, selected } = this.state;


    let submit = (e) => {
      e.preventDefault();
      this.setState({ validated: true })
      const contact = {
        firstname: e.target.elements.firstname.value,
        lastname: e.target.elements.lastname.value,
        phone: e.target.elements.phone.value,
        importance: e.target.elements.importance.value,
      }

      if (e.currentTarget.checkValidity()) {
        let newContacts;
        if (selected === null) {
          newContacts = [...contacts, { ...contact, id: v4(), isFavorite: false }]
          toast.success("Added successfully!");
        } else {
          newContacts = contacts.map((item => item.id === selected ? ({ ...item, ...contact }) : item));
          toast.success("Updated successfully!");
        }
        this.setState({
          contacts: newContacts,
          contact: { firstname: "", lastname: "", phone: "", importance: "family" },
          validated: false,
        });
      } else {
        toast.error("Please fill all fields!");
      }
      }

    let handleSearch = (e) => {
      console.log(e.target.value);
    }

    let handleImportance = (e) => {
      console.log(e.target.value);
    }

    const handleContactValue = (e) => {
      this.setState({ contact: { ...contact, [e.target.id]: e.target.value } });
    }

    const editContact = (id) => {
      const contact = contacts.find((contact) => contact.id === id);
      this.setState({ contact, selected: id });
      toast.success("");
      window.scrollTo(0, 0)
    }
    return (
      <Container>
        <h2 className='text-center py-3'>Contact project</h2>
        <ContactForm selected={selected} handleContactValue={handleContactValue} contact={contact} submit={submit} validated={validated} />
        <ContactHeader handleSearch={handleSearch} handleImportance={handleImportance} />
        <Categories editContact={editContact} contacts={contacts} />
        <ContactFooter />
      </Container>

    )
  }
}

export default HomePage