import { FC } from 'react';
import { AboutBG } from '@/shared/assets/bg'
import { Hero, Now, Tests, Class } from './parts'

export const AboutPage: FC = () => {
	return (
		<div className='flex flex-col items-center justify-center pb-28' style={{ background: `url(${AboutBG}) center no-repeat`, backgroundSize: "cover" }}>
			<div className='grid gap-28'>
				<Hero />
				<Tests />
				<Class />
				<Now />
			</div>
		</div>
	);
};