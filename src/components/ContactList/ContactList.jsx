import { Component } from 'react'
import './ContactList.css'

class ContactList extends Component {
	render () {
		const {contacts, onSelectContact, onDeleteContact} = this.props

		return (
			<div className='contact-list'>
				{contacts.map((c) => (
					<div
						key={c.id}
						className='contact-item'
						onDoubleClick={() => onSelectContact(c)}
					>
						{c.firstName} {c.lastName}
						<button className='delete-btn' onClick={() => onDeleteContact(c.id)}>x</button>
					</div>
				))}
			</div>
		)
	}
}

export default ContactList