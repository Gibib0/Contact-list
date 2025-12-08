import { Component } from 'react'
import ContactItem from '../ContactItem/ContactItem'
import './ContactList.css'

class ContactList extends Component {
	render () {
		const {contacts, onSelectContact, onDeleteContact} = this.props

		return (
			<div className='contact-list'>
				<div className='contact-list-content'>
					{contacts.map(contact => (
						<ContactItem
							key={contact.id}
							contact={contact}
							onSelect={onSelectContact}
							onDelete={onDeleteContact}
						/>
					))}
				</div>
			</div>
		)
	}
}

export default ContactList