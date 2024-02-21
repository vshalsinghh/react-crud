import React,{useState, useEffect} from 'react';
import UserForm from '../user-form/user-form';
import firebaseDb from '../../firebase';

const Users = () => {
	let [usersObject, setUsersObject] = useState({});
	let [currentId, setCurrentId] = useState('');

	useEffect(() => {
		firebaseDb.child('users').on('value', snapshot=>{
			if(snapshot.val() != null){
				setUsersObject({
					...snapshot.val()
				})
			}
			else
				setUsersObject({})
		})
	},[])
	const addOrEdit = obj => {
		if(currentId === ''){
			firebaseDb.child('users').push(
			obj,
			err => {
				if(err){
					console.log(err)
				}
				else
					setCurrentId('')
			}
		)
		}
		else{
			firebaseDb.child(`users/${currentId}`).set(
			obj,
			err => {
				if(err){
					console.log(err)
				}
				else
					setCurrentId('')
			}
		)

		}
		
	}
	const deleteUser = key => {
		if(window.confirm('Are you sure you want to delete this recood?')){
			firebaseDb.child(`users/${key}`).remove(
			
			err => {
				if(err){
					console.log(err)
				}
				else
					setCurrentId('')
			}
		)
		}
	}

	return(
		<>
		<div className='container  p-4 mb-4 container-fluid bg-dark'>
		<h1 className='display-2 text-center text-light'>User Database</h1>
		</div>
		<div className='row'>
			<div className='col-md-5'>
				<UserForm {...({addOrEdit, currentId, usersObject})} />
			</div>
			<div className='col-md-7'>
				<table className='table table-borderless '>
					<thead className='table-dark'>
						<tr>
							<th scope="col">Full Name</th>
							<th scope="col">Mobile</th>
							<th scope="col">Email</th>
							<th scope="col">Address</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>{console.log(usersObject)}
					<tbody>
						{
							Object.keys(usersObject).map(id => 
								<tr key={id}>
									<td>{usersObject[id].fullName}</td>
									<td>{usersObject[id].mobile}</td>
									<td>{usersObject[id].email}</td>
									<td>{usersObject[id].address}</td>
									<td className='p-2'>
										<a className='btn text-primary ' onClick={() => {setCurrentId(id)}}>
										<i className='fas fa-pencil-alt'></i>
										</a>
										<a className='btn text-danger' onClick={() => deleteUser(id)}>
											<i className='fas fa-trash-alt'></i>
										</a>
									</td>
								</tr>
							)
						}
					</tbody>
				</table>
			</div>
		</div>
		</>
		);
}

export default Users;
