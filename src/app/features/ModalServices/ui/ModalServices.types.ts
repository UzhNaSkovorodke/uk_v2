import {Dispatch, SetStateAction} from "react";

export interface IModalServicesProps {
	isModalOpen: boolean
	setIsModalOpen: Dispatch<SetStateAction<boolean>>
	service: {
		title: string
		description: string
		text: string
		btnText: string
		image: string
	}
}
