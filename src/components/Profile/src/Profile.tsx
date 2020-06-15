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
			<div className="row">
				<div className="profile-image col-xs-12 col-sm-3">
					<img src={image.src} alt={image.alt} />
				</div>
				<div className="profile-details col-xs-12 col-sm-9">
					<div className="profile-details__name">{name}</div>
					<div className="profile-details__grade">{grade}</div>
					<div className="profile-details__bio">{bio}</div>
				</div>
			</div>
		</div>
	);
};
