import React,{useState, useEffect} from 'react';


const UserForm = ({ addOrEdit }) => {
	const intialFieldValues = {
		fullName: '',
		mobile: '',
		email: '',
		address: '',
	}

	let [values, setValues] = useState(intialFieldValues)

	const handleInputChange = e => {
		let {name, value} = e.target;

		setValues({
			...values,
			[name]:value
		})
	}
	const handleFormSubmit = e => {
		e.preventDefault();
		addOrEdit(values)


	}

	return(
		<form autoComplete='off' onSubmit={handleFormSubmit}>
			<div className='form-group'>
				<div className="input-group flex-nowrap mb-3">
				  <span className="input-group-text" id="addon-wrapping">
				  	<i className='fas fa-user'></i>
				  </span>
				  <input type="text" 
					  className="form-control" 
					  placeholder="Username"
					  name='fullName'
					  value={values.fullName}
					  onChange={handleInputChange} 
				  />
			  </div>
			  	<div className="input-group mb-3">
				  <span className="input-group-text" id="addon-wrapping">
				  	<i className='fas fa-phone'></i>
				  </span>
				  <input type="tel" 
					  className="form-control" 
					  placeholder="Mobile"
					  name='mobile'
					  value={values.mobile}
					  onChange={handleInputChange} 
				  />
			  	</div>
				  <div className="input-group mb-3">
					  <span className="input-group-text" id="addon-wrapping">
					  	<i className='fas fa-envelope'></i>
					  </span>
					  <input type="email" 
						  className="form-control" 
						  placeholder="Email"
						  name='email'
						  value={values.email} 
						  onChange={handleInputChange}
					  />
				  </div>
				  <div className="input-group mb-3">
					  <textarea type="email" 
						  className="form-control" 
						  placeholder="Address"
						  name='address'
						  value={values.address} 
						  onChange={handleInputChange}
					  />
				  </div>
				  <div className='form-group'>
					  <button type='submit' className='btn btn-primary w-100'>
					  Save</button>
				  </div>
			  </div>
			
		</form>
		);
}

export default UserForm;
