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
			onDeleteContact
		} = this.props

		return (
			<div className='main-wrapper'>
				<div className='main-container'>
					<ContactList 
						contacts={contacts}
						onSelectContact={onSelectContact}
						onDeleteContact={onDeleteContact}
					/>
					<EditList 
						form={form}
						currentContact={currentContact}
						onFormChange={onFormChange}
						clearField={clearField}
					/>
				</div>

				<div className='main-btns'>
					<button onClick={onNew}>New</button>
					<button onClick={onSave}>Save</button>
					{currentContact && (
						<button onClick={onDelete}>Delete</button>
					)}
				</div>
			</div>
		)
	}
}

export default Main