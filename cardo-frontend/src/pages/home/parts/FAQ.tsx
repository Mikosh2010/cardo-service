import { Head } from '@/shared/ui'
import { FC } from 'react';
import { useTranslation } from 'react-i18next'
import { Accordion, AccordionTab } from 'primereact/accordion';

export const FAQ: FC = () => {
	const { t } = useTranslation();

	const questions = [
		{
			header: 'faq_title_1',
			text: 'faq_text_1'
		},
		{
			header: 'faq_title_2',
			text: 'faq_text_2'
		},
		{
			header: 'faq_title_3',
			text: 'faq_text_3'
		},
		{
			header: 'faq_title_4',
			text: 'faq_text_4'
		},
		{
			header: 'faq_title_5',
			text: 'faq_text_5'
		}
	]

	return (
		<section id='faq' className='flex flex-col items-center justify-center gap-14'>
			<Head title={t('faq_title')} text={t('faq_text')} headClass='gap-y-2' />

			<Accordion style={{ width: 1680, background: "linear-gradient(45deg, #ffffff14, #ffffff00)", border: "1px solid #ffffff14", borderRadius: 15 }}>
				{questions.map((question, index) => (
					<AccordionTab header={t(question.header)} key={index} style={{ background: 'none' }}>
            <p>{t(question.text)}</p>
          </AccordionTab>
        ))}
			</Accordion>
		</section>
	);
};