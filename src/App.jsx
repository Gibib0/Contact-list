import { Component } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      currentContact: null,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      }
    }
  }

  componentDidMount() {
    const saved = JSON.parse(localStorage.getItem('contacts'))
    if (saved) this.setState({contacts: saved})
  }

  saveToLocalStorage(list) {
    localStorage.setItem('contacts', JSON.stringify(list))
  }

  handleSelectContact = (contact) => {
    this.setState({
      currentContact: contact,
      form: {
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
      }
    })
  }

  handleFormChange = (field, value) => {
    this.setState({form: {...this.state.form, [field]: value}})
  }

  clearField = (field) => {
    this.setState({form: {...this.state.form, [field]: ''}})
  }

  handleNew = () => {
    this.setState({
      currentContact: null,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      }
    })
  }

  handleSave = () => {
    const {currentContact, contacts, form} = this.state

    if (!currentContact) {
      const newContact = {
        id: Date.now(),
        ...form,
      }

      const updated = [...contacts, newContact]
      this.setState({
        contacts: updated,
        form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      }
      })
      this.saveToLocalStorage(updated)
      return
    }

    const updated = contacts.map((c) => 
      c.id === currentContact.id ? {...currentContact, ...form} : c
    )

    this.setState({contacts: updated})
    this.saveToLocalStorage(updated)
  }

  handleDeleteCurrentContact = () => {
    const {currentContact, contacts} = this.state
    if (!currentContact) return

    const updated = contacts.filter((c) => c.id !== currentContact.id)
    this.setState({
      contacts: updated,
      currentContact: null,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      }
    })
    this.saveToLocalStorage(updated)
  }

  deleteContact = (id) => {
    const updated = this.state.contacts.filter((c) => c.id !== id)
    this.setState({contacts: updated})
    this.saveToLocalStorage(updated)
  }

  render() {
    return (
      <div className='app-container'>
        <Header />
        <Main
          contacts={this.state.contacts}
          currentContact={this.state.currentContact}
          form={this.state.form}
          onSelectContact={this.handleSelectContact}
          onFormChange={this.handleFormChange}
          clearField={this.clearField}
          onNew={this.handleNew}
          onSave={this.handleSave}
          onDelete={this.handleDeleteCurrentContact}
          onDeleteContact={this.deleteContact}
        />
      </div>
    )
  }
}

export default App