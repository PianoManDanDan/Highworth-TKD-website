import React from 'react';
import { LinkWrapperProps } from './types';
import './LinkWrapper.scss';

export const LinkWrapper: React.FC<LinkWrapperProps> = ({
	image,
	link,
	description,
}) => {
	return (
		<div className="link-wrapper">
			<div className="row">
				<div className="link-wrapper__image col-sm-12 col-md-2">
					<a href={link.src} target="_blank" rel="noopener noreferrer">
						<img src={image.src} alt={image.alt} />
					</a>
				</div>
				<div className="link-wrapper-content col-sm-12 col-md-9">
					<div className="link-wrapper-content__link">
						<a href={link.src} target="_blank" rel="noopener noreferrer">
							{link.text}
						</a>
					</div>
					<div className="link-wrapper-content__description">{description}</div>
				</div>
			</div>
		</div>
	);
};
