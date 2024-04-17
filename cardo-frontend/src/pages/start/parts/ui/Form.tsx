import { StudentFormBG, TeacherFormBG } from '@/shared/assets/bg'
import { Head } from '@/shared/ui'
import { Calendar } from 'primereact/calendar'
import { InputText } from 'primereact/inputtext'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

type FormData = {
	fullName: string
	username: string
	password: string
	birthDate: Date
	school: string
	userClass: string
}

export const Form: FC<{ role: string; onFinish: () => void }> = ({ role, onFinish }) => {
	const { t } = useTranslation()
	const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>()

	const onSubmit = (data: FormData) => {
		console.log(data)
	}

	const formBG = role === 'Teacher' ? TeacherFormBG : StudentFormBG
	const formTitle = role === 'Teacher' ? t('form_teacher_title') : t('form_student_title')
	const formText = role === 'Teacher' ? t('form_teacher_text') : t('form_student_text')

	console.log(t(formTitle));
	

	return (
		<div className="size-full flex flex-col items-center justify-center" style={{ background: `url(${formBG}) center no-repeat`, backgroundSize: "cover" }}>
			<form className="grid gap-10" style={{ width: 500 }} onSubmit={handleSubmit(onSubmit)}>
				<Head title={formTitle} text={formText} textClass='text-2xl font-light' />

				<div className="grid gap-6">
					<InputText className='placeholder:tracking-tight placeholder:text-lg' placeholder={t('form_ph_fullName')} type='text' {...register('fullName', { required: true, pattern: /^[A-Za-zА-Яа-яЁё\s,'.]+$/u })} />
					<InputText className='placeholder:tracking-tight placeholder:text-lg' placeholder={t('form_ph_username')} type='text' {...register('username', { required: true, pattern: /^[A-Za-zА-Яа-яЁё\s,'.]+$/u })} />
					<InputText className='placeholder:tracking-tight placeholder:text-lg' placeholder={t('form_ph_password')} type='password' {...register('password', { required: true, pattern: /^[A-Za-zА-Яа-яЁё\s,'.]+$/u })} />
					<Calendar  className='placeholder:tracking-tight placeholder:text-lg' placeholder={t('form_ph_birthDate')} {...register('birthDate', { required: true, pattern: /^[A-Za-zА-Яа-яЁё\s,'.]+$/u })} />
					<InputText className='placeholder:tracking-tight placeholder:text-lg' placeholder={t('form_ph_userClass')} type='text' {...register('userClass', { required: true, pattern: /^[A-Za-zА-Яа-яЁё\s,'.]+$/u })} />
					<InputText className='placeholder:tracking-tight placeholder:text-lg' placeholder={t('form_ph_school')} type='text' {...register('school', { required: true, pattern: /^[A-Za-zА-Яа-яЁё\s,'.]+$/u })} />
				</div>


				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
