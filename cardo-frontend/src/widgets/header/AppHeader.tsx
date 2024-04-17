import { FC, useEffect, useState } from 'react'
import HeaderLogo from '@/shared/assets/header-logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui'
import { Dropdown } from 'primereact/dropdown'
import { useTranslation } from 'react-i18next'

export const AppHeader: FC = () => {
	const langs = [
		{ name: 'Қазақша', code: "kz" },
		{ name: 'Русский', code: "ru" },
	]

	const navigate = useNavigate()
	const { t, i18n } = useTranslation()

	const [fixed, setFixed] = useState(false)

	useEffect(() => {
		function headerFixed() {
			if (window.scrollY >= 50) {
				setFixed(true)
			} else {
				setFixed(false)
			}
		}

		window.addEventListener('scroll', headerFixed)
		return () => {
			window.removeEventListener('scroll', headerFixed)
		}
	}, [])

	const fixedClass = 'top-0 left-0 z-50 backdrop-blur bg-white/5'

	const changeLang = (lang: { name: string; code: string }) => {
		console.log(lang)

		localStorage.setItem('lang', JSON.stringify(lang))
		i18n.changeLanguage(lang.code)
	}

	const lang = i18n.language === 'kz' ? 'Қазақша' : 'Русский'

	return (
		<header className={`w-full h-16 fixed flex justify-center items-center ease duration-300 ${fixed ? fixedClass : ''}`}>
			<div className="flex justify-between items-center" style={{ width: 1500 }}>
				<div className='flex text-lg items-center gap-6 tracking-tight'>
					<div className="flex text-lg items-center gap-2 tracking-tight">
						<img src={HeaderLogo} alt="" className='size-7' /> Cardo
					</div>
					<div className="w-px h-8 bg-white/40"></div>
					<nav className="flex items-left text-left gap-7">
						<Link to='/' className='text-left text-base/normal text-white/60 hover:text-white ease-out duration-300'>{t('header_home')}</Link>
						<Link to='/about' className='text-left text-base/normal text-white/60 hover:text-white ease-out duration-300'>{t('header_about')}</Link>
						<Link to='/contacts' className='text-left text-base/normal text-white/60 hover:text-white ease-out duration-300'>{t('header_contacts')}</Link>
					</nav>
				</div>



				<div className='flex items-center gap-4 tracking-tight'>
					<Link to='/login' className='text-white/60 hover:text-white ease-out duration-300'>{t('header_login')}</Link>
					<Dropdown
						value={lang}
						onChange={(e) => changeLang(e.value)}
						options={langs}
						optionLabel='name'
						placeholder={lang}
						className='bg-white/15 h-9'
					>
					</Dropdown>
					<Button onClick={() => navigate('/start')}>{t('header_start')}</Button>
				</div>
			</div>
		</header>
	)
}