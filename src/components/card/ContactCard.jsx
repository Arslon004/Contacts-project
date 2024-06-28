import React, { Component } from 'react'
import { Alert, Button } from 'react-bootstrap'

export class ContactCard extends Component {
  render() {
    const {firstname,lastname,importance,isFavorite,id,editContact}=this.props;

    return (
      <Alert variant='success' className=' d-flex justify-content-between align-items-center'>
        <div>
          <h5 className='text-danger'>{firstname} {lastname}</h5>
          <p className='text-success'>  My {importance} {importance === 'other' ? 'person' : ''}</p>
        </div>
        <div>
          <Button onClick={()=>editContact(id)} className='me-3'>Edit</Button>

          {
          isFavorite ?
          <Button onClick={()=>editContact(id)}  className='me-3' variant='success'>Favorite</Button>
           :
            <Button onClick={()=>editContact(id)} className='me-3' variant='dark'>Favorite</Button>
          }
          <Button variant='danger'>Delete</Button>

        </div>
      </Alert>
    )
  }
}

export default ContactCard