import { Button, Head } from '@/shared/ui'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import template from '@/shared/assets/class/template.png'
import { useTranslation } from 'react-i18next'

export const Class: FC = () => {

	const navigate = useNavigate()
	const { t } = useTranslation()

	return (
		<section id='class' className='flex flex-col items-center justify-center gap-28'>
			<Head title={t('class_title')} text={t('class_text')} headStyle={{ width: 1000 }} headClass='gap-y-6' textClass='text-1xl leading-10 font-light' />

			<div className='grid gap-24' style={{ width: 1570 }}>
				<div className="flex flex-row-reverse items-center justify-center gap-20">
					<img src={template} alt="" className="h-full" />
					<div className="grid gap-6">
						<h2 className="font-semibold text-5xl tracking-tighter drop-shadow-md text-left">{t('class_title_1')}</h2>
						<p className="font-light text-white/70 text-2xl tracking-tight drop-shadow-md text-left">{t('class_desc_1')}</p>
						<div className="flex items-center gap-4">
							<Button onClick={() => navigate('/start')}>{t('button_start')}</Button>
							<Button onClick={() => navigate('/about')}>{t('button_about')}</Button>
						</div>
					</div>
				</div>

				<div className="flex flex-row items-center justify-center gap-20">
					<img src={template} alt="" className="h-full" />
					<div className="grid gap-6">
						<h2 className="font-semibold text-5xl tracking-tighter drop-shadow-md text-left">{t('class_title_2')}</h2>
						<p className="font-light text-white/70 text-2xl tracking-tight drop-shadow-md text-left">{t('class_desc_2')}</p>
						<div className="flex items-center gap-4">
							<Button onClick={() => navigate('/start')}>{t('button_start')}</Button>
							<Button onClick={() => navigate('/about')}>{t('button_about')}</Button>
						</div>
					</div>
				</div>

				<div className="flex flex-row-reverse items-center justify-center gap-20">
					<img src={template} alt="" className="h-full" />
					<div className="grid gap-6">
						<h2 className="font-semibold text-5xl tracking-tighter drop-shadow-md text-left">{t('class_title_3')}</h2>
						<p className="font-light text-white/70 text-2xl/normal tracking-tight drop-shadow-md text-left">{t('class_desc_3')}</p>
						<div className="flex items-center gap-4">
							<Button onClick={() => navigate('/start')}>{t('button_start')}</Button>
							<Button onClick={() => navigate('/about')}>{t('button_about')}</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}