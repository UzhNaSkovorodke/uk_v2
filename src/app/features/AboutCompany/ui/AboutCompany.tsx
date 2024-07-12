'use client'
import { Flex, Text } from 'stone-kit'
import s from './AboutCompany.module.scss'
import Image from 'next/image'
import {useClientWidth} from "stone-kit/dist/shared/useClientWidth";

interface IAboutCompanyProps {
	className?: string
}

export const AboutCompany = ({}: IAboutCompanyProps) => {
	const {isMobile} = useClientWidth()

	const aboutList = [
		{
			title: 'Работа',
			icon: '/work.svg',
			description:
				'Управляющая компания STONE Office оказывает профессиональные услуги по эксплуатации и техническому обслуживанию объектов коммерческой недвижимости. Мы стремимся к долгосрочным партнерским отношениям и гарантируем высокое качество предоставляемых услуг',
		},
		{
			title: 'Наш опыт',
			icon: '/exp.svg',
			description:
				'Наша команда состоит из опытных специалистов, которые обладают глубокими знаниями и практическим опытом в области эксплуатации коммерческой недвижимости',
		},
		{
			title: 'Подход',
			icon: '/house.svg',
			description:
				'Мы тщательно изучаем особенности каждого объекта, учитывая потребности и цели собственников и разрабатываем уникальную стратегию эксплуатации',
		},
		{
			title: 'Наша цель',
			icon: '/target.svg',
			description:
				'Обеспечить клиентам максимально комфортное владение объектом коммерческой недвижимости',
		},
	]

	if (!aboutList || aboutList.length < 1) return null

	return (
		<Flex
			className={s.root}
			id='about'>
			<Text className={s.title}>О компании</Text>
			<Flex className={s.aboutList}>
				{aboutList.map((a, i) => {
					return (
						<Flex
							className={s.aboutItem}
							key={i}>
							<Flex className={s.aboutTitleWrapper}>
								<Image
									width={isMobile ? 24 : 32}
									height={isMobile ? 24 : 32}
									src={a.icon}
									alt={a.title}
								/>
								<Text
									className={s.aboutTitle}
									html={a.title}
								/>
							</Flex>
							<Text
								className={s.aboutDescription}
								html={`${a.description}`}
							/>
						</Flex>
					)
				})}
			</Flex>
		</Flex>
	)
}

