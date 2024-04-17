import { Button, Head } from '@/shared/ui'
import { FC } from 'react';
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const Hero: FC = () => {

	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleScroll = () => {
		document.getElementById('tests')?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
	}

	return (
		<section className='h-screen flex justify-center items-center'>
			<div className='flex flex-col justify-center items-center gap-y-8' style={{ width: 950 }}>
				<Head 
					title={t('about_title')}
					text={t('about_text')}
					titleClass='text-6xl'
					textClass='leading-9 font-light'
					headClass='gap-y-6'
				/>

				<div className="flex items-center gap-4">
					<Button onClick={() => navigate('/start')}>{t('button_start')}</Button>
					<Button onClick={handleScroll}>{t('button_how')}</Button>
				</div>
			</div>
		</section>
	);
};