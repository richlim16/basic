import React from 'react';
import User1 from './User1';
import api from '../../api';
import { useEffect, useState } from 'react';

	const ProfileBar = ({id}) => {

		const [username, setUsername] = useState(null);
		useEffect(() => {
			api.getProfile(id)
				.then(res => {
					setUsername(res.data[0].username);
				})
		}, []);

		return (
			<div className="profilebar">
           		<User1 profilePhoto="https://i.kym-cdn.com/entries/icons/original/000/038/790/cover1.jpg" username={username} profilestatus="I am living in your walls"/>
			</div>
		);
	};
export default ProfileBar;