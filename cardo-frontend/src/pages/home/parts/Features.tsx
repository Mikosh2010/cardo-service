import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import template from '@/shared/assets/features/template.png'
import { Button } from '@/shared/ui'
import { useNavigate } from 'react-router-dom'

export const Features: FC = () => {

	const { t } = useTranslation()
	const navigate = useNavigate()

	return (
		<section id='features' className='grid gap-24'>
			<div className="flex flex-row items-center justify-center gap-20">
				<img src={template} alt="" className="w-2/5 h-full" />
				<div className="w-2/5 grid gap-4">
					<h2 className="font-bold text-5xl tracking-tighter drop-shadow-md text-left">{t('features_title_1')}</h2>
					<p className="w-96 font-light text-white/70 text-2xl tracking-tight drop-shadow-md text-left">{t('features_desc_1')}</p>
					<div className="flex items-center gap-4">
						<Button onClick={() => navigate('/start')}>{t('button_start')}</Button>
						<Button onClick={() => navigate('/about')}>{t('button_about')}</Button>
					</div>
				</div>
			</div>

			<div className="flex flex-row-reverse items-center justify-center gap-20">
				<img src={template} alt="" className="w-2/5 h-full" />
				<div className="w-2/5 grid gap-4">
					<h2 className="font-bold text-5xl tracking-tighter drop-shadow-md text-left">{t('features_title_2')}</h2>
					<p className="w-96 font-light text-white/70 text-2xl tracking-tight drop-shadow-md text-left">{t('features_desc_2')}</p>
					<div className="flex items-center gap-4">
						<Button onClick={() => navigate('/start')}>{t('button_start')}</Button>
						<Button onClick={() => navigate('/about')}>{t('button_about')}</Button>
					</div>
				</div>
			</div>

			<div className="flex flex-row items-center justify-center gap-20">
				<img src={template} alt="" className="w-2/5 h-full" />
				<div className="w-2/5 grid gap-4">
					<h2 className="font-bold text-5xl tracking-tighter drop-shadow-md text-left">{t('features_title_3')}</h2>
					<p className=" w-4/5 font-light text-white/70 text-2xl/normal tracking-tight drop-shadow-md text-left">{t('features_desc_3')}</p>
					<div className="flex items-center gap-4">
						<Button onClick={() => navigate('/start')}>{t('button_start')}</Button>
						<Button onClick={() => navigate('/about')}>{t('button_about')}</Button>
					</div>
				</div>
			</div>
		</section>
	)
}