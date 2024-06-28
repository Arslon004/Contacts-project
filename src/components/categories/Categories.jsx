import React, { Component } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import ContactCard from '../card/ContactCard';

export class Categories extends Component {
  state = {
    activeKey: "all",
  }

  render() {
    let { contacts, editContact, search, importance, deleteContact, favoriteContact, unFavoriteContact } = this.props;
    let { activeKey } = this.state;

    const handleTabs = (e) => {
      this.setState({ activeKey: e });
    }

    // Search filter
    contacts = contacts.filter((contact) =>
      contact.firstname.toLowerCase().includes(search.toLowerCase()) ||
      contact.lastname.toLowerCase().includes(search.toLowerCase())
    );

    // Importance filter
    if (importance === 'all') {

    } else if (importance === 'a-z') {
      contacts.sort((a, b) => a.firstname.localeCompare(b.firstname));
    } else {
      contacts = contacts.filter((contact) => contact.importance === importance);
    }


    return (
      <Tabs
        activeKey={activeKey}
        onSelect={handleTabs}
        className="mb-3"
        fill
        variant='pills'
      >
        <Tab eventKey="all" title="All">
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
        <Tab eventKey="favorite" title="Favorite">
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
