import { Component } from 'react'
import './EditList.css'

class EditList extends Component {
	renderInput(field, labelText) {
		const {form, onFormChange, clearField} = this.props

		return (
			<div className='input-container'>
				<input 
					type="text"
					placeholder={labelText}
					value={form[field]}
					onChange={(e) => onFormChange(field, e.target.value)} 
				/>
				{form[field] && (
					<button className='clear-btn' onClick={() => clearField(field)}>x</button>
				)}
			</div>
		)
	}

	render() {
		const {currentContact, onNew, onSave, onDelete} = this.props

		return (
			<div className='edit-list'>
				{this.renderInput('firstName', 'First Name')}
				{this.renderInput('lastName', 'Last Name')}
				{this.renderInput('email', 'Email')}
				{this.renderInput('phone', 'Phone')}

				<div className='btns'>
					<button onClick={onNew}>New</button>
					<button onClick={onSave}>Save</button>
					{currentContact && <button onClick={onDelete}>Delete</button>}
				</div>
			</div>
		)
	}
}

export default EditList