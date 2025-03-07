export interface IModalNewsProps {
	isModalOpen: boolean
	setIsModalOpen: (isOpen: boolean) => void
	news: {
		title: string
		date: string
		image: string
		pageImage: string
		subTitle: string
		text: string
	}
}
