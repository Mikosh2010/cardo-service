import { ContactsBG } from '@/shared/assets/bg'
import { Button, Head } from '@/shared/ui'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const ContactsPage: FC = () => {

	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<div className='h-screen flex flex-col items-center justify-center gap-10' style={{ background: `url(${ContactsBG}) center no-repeat`, backgroundSize: "cover" }}>
			<Head title={t('contacts_title')} text={t('contacts_text')} />

			<div className="grid gap-4 w-72">
				<Button buttonClass='py-3' onClick={() => window.location.href = 'https://wa.me/77788983567'}>{t('contacts_whatsapp')}</Button>
				<Button buttonClass='py-3'>{t('contacts_email')}</Button>
				<Button buttonClass='py-3' onClick={() => navigate('/#faq')}>{t('contacts_questions')}</Button>
			</div>
		</div>
	);
};