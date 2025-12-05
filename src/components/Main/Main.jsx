import { Component } from 'react'
import ContactList from './ContactList/ContactList'
import EditList from './EditList/EditList'
import './Main.css'

class Main extends Component {
	render() {
		const {
			contacts,
			currentContact,
			form,
			onSelectContact,
			onFormChange,
			clearField,
			onNew,
			onSave,
			onDelete,
			deleteContact
		} = this.props

		return (
			<div className='main-container'>
				<ContactList 
					contacts={contacts}
					onSelectContact={onSelectContact}
					deleteContact={deleteContact}
				/>
				<EditList 
					form={form}
					currentContact={currentContact}
					onFormChange={onFormChange}
					clearField={clearField}
					onNew={onNew}
					onSave={onSave}
					onDelete={onDelete}
				/>
			</div>
		)
	}
}

export default Main