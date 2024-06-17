import { Button, Flex, Modal, NewIcon, Text } from 'stone-kit'
import { Logo } from '@/src/app/widgets/Logo'
import Image from 'next/image'
import { IModalServicesProps } from './ModalServices.types'
import s from './ModalServices.module.scss'

export const ModalServices = ({ isModalOpen, setIsModalOpen, service }: IModalServicesProps) => {
	const { title, description, text, pageImage } = service

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
					<Image
						src={pageImage}
						width={375}
						height={220}
						alt='фото сервиса'
					/>
					<Flex className={s.textWrapper}>
						<Text
							className={s.textTitle}
							html={title}
						/>
						<Text
							className={s.textDescription}
							html={description}
						/>
						<Text
							className={s.textValue}
							html={text}
						/>
					</Flex>
				</Flex>
			</Flex>
		</Modal>
	)
}

