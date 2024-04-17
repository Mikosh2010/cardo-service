import { Button, Head } from '@/shared/ui'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const Now: FC = () => {

	const { t } = useTranslation()
	const navigate = useNavigate();

	return (
		<section id='now' className='flex flex-col items-center gap-8 mt-6'>
			<Head title={t('now_title')} text={t('now_text')} />

			<div className="flex items-center gap-4">
				<Button onClick={() => navigate('/start')}>{t('button_start')}</Button>
				<Button onClick={() => navigate('/about')}>{t('button_about')}</Button>
			</div>
		</section>
	)
}