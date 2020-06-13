import React from 'react';
import { SectionHeading } from '../../../components/SectionHeading/src';
import './Classes.scss';

export const Classes: React.FC<{}> = () => {
	return (
		<div id="classes">
			<SectionHeading text="Classes" />
			<div className="section-body">
				We run 2 classes each week at the Halo Highworth Recreation Centre,
				which are open to adults and children of all abilities. These classes
				are:
				<div className="classes__class-times">
					Tuesday 18:30 - 19:30
					<br />
					Sunday 12:00 - 13:00
				</div>
				<div className="classes__class-map">
					<iframe
						title="Map to Halo Leisure Centre"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.6859917665!2d-1.7153262840716044!3d51.62896100962856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48714862a4747f89%3A0xe72a5c79948c9e9a!2sHalo%20Highworth%20Recreation%20Centre!5e0!3m2!1sen!2suk!4v1592061542041!5m2!1sen!2suk"
						allowFullScreen
						frameBorder={0}
						aria-hidden={false}
						tabIndex={0}
					/>
				</div>
			</div>
		</div>
	);
};
