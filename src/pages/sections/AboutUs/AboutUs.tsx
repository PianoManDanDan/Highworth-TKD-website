import React from 'react';
import { SectionHeading } from '../../../components/SectionHeading/src';
import './AboutUs.scss';

export const AboutUs: React.FC<{}> = () => {
	return (
		<div id="about" className="section">
			<SectionHeading text="About Us" />
			<div className="section-body">
				Tae Kwon-Do is a Korean Martial art, officially founded by General Choi
				Hong Hi in 1955. Tae Kwon-Do (literally,
				<span className="definition">
					&lsquo;The art of Kicking and Punching&rsquo;
				</span>
				) is a defensive martial art focusing on self-defense and discipline.
				<br />
				Highworth Tae Kwon-Do club was started in the 1990&apos;s by the head
				instructor, Mrs Alison Lee.
				<br />
				Learning Tae Kwon-Do is an excellent way to improve fitness and
				flexibility, whilst also learning self-defense. We offer family friendly
				classes for people of all ages. Our classes offer a great way to make
				new friends, while getting fit at the same time.
				<br />
				We train in the original, ITF (Chang-Hon) style of Tae Kwon-Do.
			</div>
		</div>
	);
};
