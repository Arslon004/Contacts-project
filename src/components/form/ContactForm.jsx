import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export class ContactForm extends Component {
  render() {
    let {submit,validated,contact,handleContactValue,selected}=this.props
    return (
      <Form  noValidate validated={validated} className='w-50 mx-auto form' onSubmit={submit}>
        <Form.Group className='mb-4'  controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            onChange={handleContactValue}
            value={contact.firstname}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>

        </Form.Group>

        <Form.Group className='mb-4'  controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
          onChange={handleContactValue}
          value={contact.lastname}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-4'  controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            onChange={handleContactValue}
            value={contact.phone}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
        </Form.Group>

       <Form.Group
        onChange={handleContactValue}
        value={contact.importance} className='mb-4' controlId="importance">
          <Form.Label>Importance</Form.Label>
          <Form.Select >
            <option value="family">My family</option>
            <option value="friends">My friend</option>
            <option value="relative">My relative</option>
            <option value="other">My other person</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" className='w-100 mb-5'>{selected===null ? "Add": "Save"} contact</Button>
      </Form>
    )
  }
}

export default ContactForm