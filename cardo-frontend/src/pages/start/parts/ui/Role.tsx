import { FC } from 'react'
import logo from '@/shared/assets/header-logo.svg'
import { RoleBG } from '@/shared/assets/bg'
import { useTranslation } from 'react-i18next'
import TeacherImage from '@/shared/assets/role/teacher.png'
import StudentImage from '@/shared/assets/role/student.png'

export const Role: FC<{ onSelectRole: (role: string) => void }> = ({ onSelectRole }) => {

	const { t } = useTranslation();

	return (
		<div className='size-full flex flex-col items-center justify-center' style={{ background: `url(${RoleBG}) center no-repeat`, backgroundSize: "cover" }}>
			<div className="p-12 flex flex-col items-center justify-center gap-12 rounded-3xl" style={{ background: "#7373730a", border: "1px solid #ffffff0d", width: 960 }}>
				<div className="flex flex-col items-center gap-6">
					<img src={logo} alt="" className="size-12" />
					<h2 className='text-3xl tracking-tight font-medium'>{t('role_title')}</h2>
				</div>

				<div className="flex items-center justify-center gap-14">
					<div 
						className='w-2/4 flex flex-col items-center gap-4 rounded-2xl py-11 px-9 hover:-translate-y-3 hover:!bg-white/[.08] ease duration-300 cursor-pointer' 
						onClick={() => onSelectRole('Teacher')} style={{ background: "#9696960f" }}
					>
						<img src={TeacherImage} alt="" className='w-52' />
						<div className="grid gap-3">
							<h2 className="font-semibold text-3xl tracking-tight drop-shadow-md text-left">{t('role_teacher_title')}</h2>
              <p className="text-white/70 text-lg/8 tracking-tight drop-shadow-md text-left">{t('role_teacher_desc')}</p>
						</div>
					</div>
					<div 
						className='w-2/4 flex flex-col items-center gap-4 rounded-2xl py-11 px-9 hover:-translate-y-3 hover:!bg-white/[.08] ease duration-300 cursor-pointer' 
						onClick={() => onSelectRole('Student')} style={{ background: "#9696960f" }}
					>
						<img src={StudentImage} alt="" className='w-52' />
						<div className="grid gap-3">
							<h2 className="font-bold text-3xl tracking-tight drop-shadow-md text-left">{t('role_student_title')}</h2>
              <p className="text-white/70 text-lg/8 tracking-tight drop-shadow-md text-left">{t('role_student_desc')}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};