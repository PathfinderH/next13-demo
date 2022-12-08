import { ReactNode } from 'react'
import '../styles/globals.css'
import Header from './Header'
export default function layout({ children }: { children: ReactNode }) {
	return (
		<html>
			<head></head>
			<body>
				<Header />
				{children}
			</body>
		</html>
	)
}
