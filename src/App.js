import React, { Component } from 'react';
import data from './contacts.json';
import Button from './components/Button';
import Card from './components/Card.js';
import Counter from './components/Counter';

import './App.css';

class App extends Component {

  state = {
    contacts: data.slice(0,5),
    inputValue: ''
  }

  handleAddContact = () => {
    let { contacts } = this.state;
    contacts.push(data[Math.floor( Math.random() * data.length )]);
    this.setState({
      contacts: contacts,
    })
  }

  sortContacts = (contacts) => {
    return contacts.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0; 
    })
  }

  handleSortContact = () => {
    let { contacts } = this.state;

    this.setState({
      contacts: this.sortContacts(contacts),
    })
  }

  handleDeleteContact = (index) => {
    let { contacts } = this.state;
    contacts.splice(index, 1);
    this.setState({contacts: contacts})
  }

  handleInput = (event) => {
    console.log(event.target.value)
    this.setState({
      inputValue: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { contacts, inputValue } = this.state
    contacts.push({
      name: inputValue,
      pictureUrl: "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
      popularity: 8.324357,
    })
    this.setState({
      contacts: contacts,
      inputValue: ''
    })
  }

  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.inputValue} onChange={this.handleInput}/>
        <input type="submit" value="send"/>
      </form>
      <Button onClick={this.handleAddContact}
      >Add Contact</Button>
      <Button onClick={this.handleSortContact}>Sort Contacts</Button>
      {this.state.contacts.map((contact, index) => {
        return <Card key={index} data={contact} index={index} onDelete={this.handleDeleteContact}/>
      })}
      </div>
    );
  }
}

export default App;
