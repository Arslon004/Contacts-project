import React, { Component } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

export class ContactHeader extends Component {

  render() {
    let {contacts, handleSearch ,handleImportance,search} = this.props;

    return (
      <InputGroup className="mb-4">
        <Form.Control
          onChange={handleSearch}
          placeholder="Searching"
        />
        <InputGroup.Text >
          <Form.Select onChange={handleImportance}>
          <option value="all">All</option>
            <option value="family">My family</option>
            <option value="friends">My friends</option>
            <option value="relative">My relative</option>
            <option value="other">My other person</option>
            <option value="a-z">A-Z</option>
          </Form.Select>
        </InputGroup.Text>
      </InputGroup>
    )
  }
}

export default ContactHeader