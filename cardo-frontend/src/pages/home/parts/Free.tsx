import { Head } from '@/shared/ui'
import { FC } from 'react';
import { useTranslation } from 'react-i18next'
import freeTemplate from '@/shared/assets/free/template.png'

export const Free: FC = () => {

	const { t } = useTranslation();

	return (
		<section id='free' className='flex flex-col items-center justify-center gap-20 my-20'>
			<Head title={t('free_title')} text={t('free_text')} headStyle={{ width: 750 }} />

			<div className="flex items-center gap-14" style={{ width: 1100 }}>
				<div className="w-2/4 grid gap-7">
					<img src={freeTemplate} alt="" className="w-full" />

					<div className="flex flex-col items-left justify-center gap-4">
            <h1 className="text-4xl font-bold text-white">{t('free_card_title_1')}</h1>
            <p className="text-xl text-white/70">{t('free_card_text_1')}</p>
          </div>
				</div>

				<div className="w-2/4 grid gap-7">
					<img src={freeTemplate} alt="" className="w-full" />

					<div className="flex flex-col items-left justify-center gap-4">
            <h1 className="text-4xl font-bold text-white">{t('free_card_title_2')}</h1>
            <p className="text-xl text-white/70">{t('free_card_text_2')}</p>
          </div>
				</div>
			</div>
		</section>
	);
};