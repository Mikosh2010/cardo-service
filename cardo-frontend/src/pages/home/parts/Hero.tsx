import { Button, Head } from '@/shared/ui'
import { FC } from 'react';
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const Hero: FC = () => {

	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<section id='hero' className='h-screen flex justify-center items-center'>
			<div className='flex flex-col justify-center items-center gap-y-8'>
				<Head 
					title={t('home_title')}
					text={t('home_text')}
					titleClass='text-7xl'
					textClass='text-[28]'
					headClass='w-[1000px] gap-y-6'
				/>

				<div className="flex items-center gap-4">
					<Button onClick={() => navigate('/start')}>{t('button_start')}</Button>
					<Button onClick={() => navigate('/about')}>{t('button_about')}</Button>
				</div>
			</div>
		</section>
	);
};