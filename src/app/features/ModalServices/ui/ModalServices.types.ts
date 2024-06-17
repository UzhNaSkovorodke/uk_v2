export interface IModalServicesProps {
	isModalOpen: boolean
	setIsModalOpen: (isOpen: boolean) => void
	service: {
		title: string
		description: string
		text: string
		btnText: string
		image: string
		pageImage: string
	}
}
