import React, { Component } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import ContactCard from '../card/ContactCard';

export class Categories extends Component {
  state={
    activeKey:"all",
  }
  render() {
    let {contacts,editContact}=this.props;

    let {activeKey}=this.state;
    let handleTabs=(e)=>{
    this.setState({activeKey:e})
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
        {contacts.map((contact)=><ContactCard editContact={editContact} key={contact.id} {...contact} />)}

      </Tab>
      <Tab eventKey="favorite" title="Favorite">
        {contacts.filter((contact)=>contact.isFavorite).map((contact)=><ContactCard editContact={editContact} key={contact.id} {...contact}/>)}

      </Tab>
    </Tabs>
    )
  }
}

export default Categories