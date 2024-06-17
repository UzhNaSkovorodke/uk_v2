import { Button, Flex, Modal, NewIcon, Text } from 'stone-kit'
import { Logo } from '@/src/app/widgets/Logo'
import Image from 'next/image'
import { IModalNewsProps } from './ModalNews.types'
import s from './ModalNews.module.scss'

export const ModalNews = ({ isModalOpen, setIsModalOpen, news }: IModalNewsProps) => {
	const { title, date, pageImage, text } = news

	if (!news) return null
	return (
		<Modal
			isOpen={isModalOpen}
			emitIsOpen={setIsModalOpen}
			additionalClass={s.modal}>
			<Flex className={s.modalContent}>
				<Flex className={s.modalHeader}>
					<Logo
						variant='black'
						uk
					/>
					<Button
						variant='gray'
						as='button'
						size='small'
						onClick={() => setIsModalOpen(false)}>
						<NewIcon
							name='close'
							size='16'
						/>
					</Button>
				</Flex>
				<Flex className={s.modalBody}>
					<Text
						className={s.textTitle}
						html={title}
					/>
					<Text
						className={s.textDate}
						html={date}
					/>
					<Image
						src={pageImage}
						width={375}
						height={220}
						alt='фото новости'
					/>
					<Text
						className={s.textValue}
						html={text}
					/>
				</Flex>
			</Flex>
		</Modal>
	)
}

