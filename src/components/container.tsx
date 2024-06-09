import { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex w-full justify-center px-3">
			<div className="w-full max-w-5xl">{children}</div>
		</div>
	)
}
