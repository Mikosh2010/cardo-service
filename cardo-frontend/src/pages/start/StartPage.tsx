import { FC, useState } from 'react'
import { Form, Role } from './parts'
import { useNavigate } from 'react-router-dom'
// import { CreateClass } from './parts/ui/CreateClass'

export const StartPage: FC = () => {

	const [step, setStep] = useState<string>('Role')
	const navigate = useNavigate();

	const onSelectRole = (role: string) => {
		if (role === 'Student') setStep('StudentForm')
		else if (role === 'Teacher') setStep('TeacherForm')
		else setStep('Role')		
	}

	const onFinishForm = () => {
		if (step === 'StudentForm') navigate('/')
    else if (step === 'TeacherForm') setStep('CreateClass')
    else navigate('/')
	}

	return (
		<div className='w-screen h-screen'>
			{step === 'Role' && <Role onSelectRole={(role: string) => onSelectRole(role)} />}
			{step === 'StudentForm' && <Form role='Student' onFinish={onFinishForm} />}
			{step === 'TeacherForm' && <Form role='Teacher' onFinish={onFinishForm} />}
			{/* {step === 'CreateClass' && <CreateClass teacherClass={} />} */}
		</div>
	);
};