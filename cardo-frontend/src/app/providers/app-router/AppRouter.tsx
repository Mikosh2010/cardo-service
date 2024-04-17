import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, AboutPage, ContactsPage, StartPage } from '@/pages'

export const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/contacts" element={<ContactsPage />} />
			<Route path="/start" element={<StartPage />} />
			<Route path='/*' element={<Navigate to='/' replace />} />
		</Routes>
	);
};