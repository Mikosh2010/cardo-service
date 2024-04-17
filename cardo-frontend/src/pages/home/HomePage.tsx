import { FC } from 'react';
import { HomeBG } from '@/shared/assets/bg'
import { Hero, Features, Free, FAQ, Now } from './parts'

export const HomePage: FC = () => {
	return (
		<div className='flex flex-col items-center justify-center mb-28' style={{ background: `url(${HomeBG}) center no-repeat`, backgroundSize: "cover" }}>
			<div className='grid gap-28'>
				<Hero />
				<Features />
				<Free />
				<FAQ />
				<Now />
			</div>
		</div>
	);
};