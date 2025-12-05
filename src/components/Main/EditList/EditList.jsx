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
		return (
			<div className='edit-list'>
				{this.renderInput('firstName', 'First Name')}
				{this.renderInput('lastName', 'Last Name')}
				{this.renderInput('email', 'Email')}
				{this.renderInput('phone', 'Phone')}
			</div>
		)
	}
}

export default EditList