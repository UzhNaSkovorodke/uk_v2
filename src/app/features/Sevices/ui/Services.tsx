'use client'
import Image from 'next/image'
import { Button, Flex, NewIcon, Text } from 'stone-kit'
import { useState } from 'react'
import { ModalServices } from '../../ModalServices'
import s from './Services.module.scss'

export const Services = ({}) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [activeService, setActiveService] = useState<number>(0)

	const servicesList = [
		{
			title: 'Бытовые услуги',
			description: 'Поддерживаем дома и придомовые территории',
			text: 'Управляющая офисная компания «STONE» — это ваш надежный партнер в создании комфортных и эффективных условий работы. Мы предлагаем полный спектр услуг по управлению и обслуживанию офисных помещений, включая техническое обслуживание, клининг, охрану и обеспечение комфорта сотрудников. Наша команда профессионалов обеспечивает высокий уровень сервиса и оперативное решение любых возникающих вопросов. С «STONE» вы можете быть уверены, что ваш офис будет работать как часы, позволяя вам сосредоточиться на развитии бизнеса. Мы берем на себя заботы о вашем рабочем пространстве, предоставляя комплексные решения для улучшения его функциональности и эстетики. Доверяйте экспертам — выбирайте «STONE» и наслаждайтесь безупречным сервисом.',
			btnText: 'Подробнее',
			image: '/services1.webp',
			pageImage: '/servicePage.webp',
		},
		{
			title: 'Лакшери услуги',
			description: 'Поддерживаем дома и не только',
			btnText: 'Подробнее',
			text: 'Лухари текст',
			image: '/services2.webp',
			pageImage: '/servicePage.webp',
		},
		{
			title: 'Пятерочка',
			description: 'Поддерживаем',
			btnText: 'Подробнее',
			text: 'Кушанье',
			image: '/services3.webp',
			pageImage: '/servicePage.webp',
		},
	]

	if (!servicesList) return null
	return (
		<Flex
			className={s.root}
			id='services'>
			<Text className={s.title}>Услуги</Text>
			<Flex className={s.servicesList}>
				{servicesList.map((item, i) => {
					return (
						<Flex
							key={i}
							className={s.cardItem}>
							<Image
								src={item.image}
								width={160}
								height={160}
								alt={item.title}
								className={s.image}
							/>
							<Text
								className={s.cardTitle}
								html={`${item.title}`}
							/>
							<Text
								className={s.cardDescription}
								html={`${item.description}`}
							/>
							<Button
								variant='whiteStroke'
								size='medium'
								as='button'
								additionalClass={s.cardBtn}
								onClick={() => (setIsModalOpen(true), setActiveService(i))}>
								{item.btnText}
							</Button>
						</Flex>
					)
				})}
			</Flex>
			<Button
				width='full'
				variant='blue'
				as='button'
				additionalClass={s.servicesBtn}
				post={
					<NewIcon
						name='arrowLong'
						deg='-90'
						color='white'
					/>
				}>
				Оставить обращение
			</Button>
			<ModalServices
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				service={servicesList[activeService]}
			/>
		</Flex>
	)
}

