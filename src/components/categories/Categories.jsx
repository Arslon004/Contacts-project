import React, { Component } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import ContactCard from '../card/ContactCard';

export class Categories extends Component {
  state = {
    activeKey: "all",
  }

  render() {
    let { contacts, editContact, search, importance, category,deleteContact, favoriteContact, unFavoriteContact } = this.props;
    let { activeKey } = this.state;

    const handleTabs = (e) => {
      this.setState({ activeKey: e });
    }
    const favoritesContact = contacts.filter((contact) => contact.isFavorite);
    // Search filter
    contacts = contacts.filter((contact) =>
      contact.firstname.toLowerCase().includes(search.toLowerCase()) ||
      contact.lastname.toLowerCase().includes(search.toLowerCase())
    );

    // Importance filter
    if (importance === 'all') {

    } else{
      // contacts.sort((a, b) => a.firstname.localeCompare(b.firstname));
      contacts = contacts.filter((contact) => contact.importance === importance);
    }
   if(category==='sort'){

   }else if(category === 'a-z'){
      contacts.sort((a, b) => a.firstname.localeCompare(b.firstname));
   }else if(category === 'z-a'){
      contacts.sort((a, b) => b.firstname.localeCompare(a.firstname));
   }
    return (
      <Tabs
        activeKey={activeKey}
        onSelect={handleTabs}
        className="mb-3"
        fill
        variant='pills'
      >
        <Tab eventKey="all" title={`All (${contacts.length})`} >
          {contacts.map((contact) =>
            <ContactCard
              unFavoriteContact={unFavoriteContact}
              favoriteContact={favoriteContact}
              deleteContact={deleteContact}
              editContact={editContact}
              key={contact.id}
              {...contact}
            />
          )}
        </Tab>
        <Tab eventKey="favorite" title={`Favorite (${favoritesContact.length})`}>
          {contacts.filter((contact) => contact.isFavorite).map((contact) =>
            <ContactCard
              deleteContact={deleteContact}
              editContact={editContact}
              unFavoriteContact={unFavoriteContact}
              key={contact.id}
              {...contact}
            />
          )}
        </Tab>
      </Tabs>
    )
  }
}

export default Categories;
