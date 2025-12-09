import { Component } from "react";
import './ContactItem.css'

class ContactItem extends Component {
	handleDoubleClick = () => {
		this.props.onSelect(this.props.contact)
	}

	handleDeleteClick = (e) => {
		e.stopPropagation()
		this.props.onDelete(this.props.contact.id)
	}

	render() {
		const {contact} = this.props
		const {firstName, lastName} = contact

		return (
			<div className="contact-item" onDoubleClick={this.handleDoubleClick}>
				<span className="contact-name">{firstName} {lastName}</span>
				<button className="contact-delete-btn" onClick={this.handleDeleteClick}>x</button>
			</div>
		)
	}
}

export default ContactItem