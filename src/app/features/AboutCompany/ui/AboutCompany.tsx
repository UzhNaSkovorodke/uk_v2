import { Flex, Text } from 'stone-kit'
import s from './AboutCompany.module.scss'
import Image from 'next/image'

interface IAboutCompanyProps {
	className?: string
}

export const AboutCompany = ({}: IAboutCompanyProps) => {
	const aboutList = [
		{
			title: 'Работа',
			icon: '/work.svg',
			description:
				'Мы оказываем профессиональные услуги по эксплуатации и техническому обслуживанию объектов коммерческой недвижимости',
		},
		{
			title: 'Опыт',
			icon: '/exp.svg',
			description:
				'Наша команда состоит из опытных специалистов, которые обладают глубокими знаниями и практическим опытом в области эксплуатации коммерческой недвижимости',
		},
		{
			title: 'Подход',
			icon: '/house.svg',
			description:
				'Мы тщательно изучаем особенности каждого объекта, учитывая его специфические потребности и цели собственников, и разрабатываем уникальную стратегию эксплуатации',
		},
		{
			title: 'Цель',
			icon: '/target.svg',
			description:
				'Наша цель – обеспечить клиентам максимальную удовлетворенность от владения объектом коммерческой недвижимости',
		},
	]

	if (!aboutList || aboutList.length < 1) return null

	return (
		<Flex className={s.root}>
			<Text className={s.title}>О компании</Text>
			<Flex className={s.aboutList}>
				{aboutList.map((a, i) => {
					return (
						<Flex
							className={s.aboutItem}
							key={i}>
							<Flex className={s.aboutTitleWrapper}>
								<Image
									width={24}
									height={24}
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

