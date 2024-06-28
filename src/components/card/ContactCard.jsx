import React, { Component } from 'react'
import { Alert, Button } from 'react-bootstrap'

export class ContactCard extends Component {
  render() {
    const {firstname,lastname,importance,isFavorite,id,editContact,deleteContact,favoriteContact,unFavoriteContact}=this.props;

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
          <Button onClick={()=>unFavoriteContact(id)}  className='me-3' variant='success'>Favorite</Button>
           :
            <Button onClick={()=>favoriteContact(id)} className='me-3' variant='dark'>Favorite</Button>
          }
          <Button onClick={()=>deleteContact(id)} variant='danger'>Delete</Button>

        </div>
      </Alert>
    )
  }
}

export default ContactCard