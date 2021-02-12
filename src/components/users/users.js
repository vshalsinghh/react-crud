import React from 'react';
import UserForm from '../user-form/user-form';
// import firebaseDb from '../firebase';

const Users = () => {

	const addOrEdit = obj => {
		//addtofirebase data
		// firebaseDb.child('users').push(
		// 	obj,
		// 	err => {
		// 		if(err){
		// 			console.log(err)
		// 		}
		// 	}
		// )
	}

	return(
		<>
		<div className='container  p-4 mb-4 container-fluid bg-light'>
		<h1 className='display-1 text-center'>hello</h1>
		</div>
		<div className='row'>
			<div className='col-md-5'>
				<UserForm addOrEdit={addOrEdit} />
			</div>
			<div className='col-md-7'>
			<div>List of Users</div>
			</div>
		</div>
		</>
		);
}

export default Users;
