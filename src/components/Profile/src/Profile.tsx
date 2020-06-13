import React from 'react';
import { ProfileProps } from './types';
import './Profile.scss';

export const Profile: React.FC<ProfileProps> = ({
	image,
	name,
	grade,
	bio,
}) => {
	return (
		<div className="profile">
			<div className="profile-image">
				<img src={image.src} alt={image.alt} />
			</div>
			<div className="profile-details">
				<div className="profile-details__name">{name}</div>
				<div className="profile-details__grade">{grade}</div>
				<div className="profile-details__bio">{bio}</div>
			</div>
		</div>
	);
};
