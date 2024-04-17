import { Head } from '@/shared/ui'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import testsTemplate from '@/shared/assets/tests/template.png'

export const Tests: FC = () => {

	const { t } = useTranslation();

	return (
		<section id='tests' className='flex flex-col items-center justify-center gap-24 mb-32'>
			<Head title={t('tests_title')} text={t('tests_text')} headStyle={{ width: 700 }} headClass='gap-y-6' textClass='text-1xl leading-10 font-light' />

			<div className="flex items-center gap-20" style={{ width: 1570 }}>
				<div className="w-2/4 grid gap-7">
					<img src={testsTemplate} alt="" className="w-full" />

					<div className="flex flex-col items-left justify-center gap-4">
            <h1 className="text-3xl font-semibold text-white tracking-tight drop-shadow-xl">{t('tests_card_title_1')}</h1>
            <p className="text-lg text-white/70 drop-shadow-xl">{t('tests_card_text_1')}</p>
          </div>
				</div>

				<div className="w-2/4 grid gap-7">
					<img src={testsTemplate} alt="" className="w-full" />

					<div className="flex flex-col items-left justify-center gap-4">
            <h1 className="text-3xl font-semibold text-white tracking-tight drop-shadow-xl">{t('tests_card_title_2')}</h1>
            <p className="text-lg text-white/70 drop-shadow-xl">{t('tests_card_text_2')}</p>
          </div>
				</div>

				<div className="w-2/4 grid gap-7">
					<img src={testsTemplate} alt="" className="w-full" />

					<div className="flex flex-col items-left justify-center gap-4">
            <h1 className="text-3xl font-semibold text-white tracking-tight drop-shadow-xl">{t('tests_card_title_3')}</h1>
            <p className="text-lg text-white/70 drop-shadow-xl">{t('tests_card_text_3')}</p>
          </div>
				</div>
			</div>
		</section>
	);
};