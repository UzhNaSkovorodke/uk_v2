'use client'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface IFormModalContext {
	isFormModalOpen: boolean
	setIsFormModalOpen: Dispatch<SetStateAction<boolean>>
}

export const FormContext = createContext<IFormModalContext>({
	isFormModalOpen: false,
	setIsFormModalOpen: () => {},
})

export const FormProvider = ({ children }: { children?: React.ReactNode }) => {
	const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false)

	return (
		<FormContext.Provider
			value={{
				isFormModalOpen: isFormModalOpen,
				setIsFormModalOpen: setIsFormModalOpen,
			}}>
			{children}
		</FormContext.Provider>
	)
}

