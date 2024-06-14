import Image from 'next/image'
import s from './Services.module.scss'
import { Button, Flex, NewIcon, Text } from 'stone-kit'

interface IServicesProps {
	className?: string
}

export const Services = ({}: IServicesProps) => {
	const servicesList = [
		{
			title: 'Бытовые услуги',
			description: 'Поддерживаем дома и придомовые территории',
			btnText: 'Подробнее',
			image: '/services1.webp',
		},
		{
			title: 'Бытовые услуги',
			description: 'Поддерживаем дома и придомовые территории',
			btnText: 'Подробнее',
			image: '/services2.webp',
		},
		{
			title: 'Бытовые услуги',
			description: 'Поддерживаем дома и придомовые территории',
			btnText: 'Подробнее',
			image: '/services3.webp',
		},
	]

	if (!servicesList) return null
	return (
		<Flex className={s.root}>
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
								additionalClass={s.cardBtn}>
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
		</Flex>
	)
}

