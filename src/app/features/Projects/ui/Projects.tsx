'use client'
import { Flex, RoundButton, Tag, Text } from 'stone-kit'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Swiper as SwiperClass } from 'swiper/types'
import { EffectFade } from 'swiper/modules'
import s from './Projects.module.scss'

interface IProjectsProps {}

export const Projects = ({}: IProjectsProps) => {
	const [activeIndex, setActiveIndex] = useState(0)
	const swiperRef = useRef<SwiperClass | null>(null)

	const projectsList = [
		{
			name: 'Stone Towers',
			image: '/project1.webp',
			features: ['160 000 кв.м', '5 этаж', '3 комнаты'],
		},
		{
			name: 'Stone Coin',
			image: '/project1.webp',
			features: ['1 000 000 кв.м', '1 этаж', '2 комнаты'],
		},
		{
			name: 'Stone Savelovskaya',
			image: '/project1.webp',
			features: ['310 100 кв.м', '10 этаж'],
		},
	]

	return (
		<div className={s.root}>
			<Text className={s.title}>Объекты</Text>
			<div className={s.sliderWrapper}>
				<RoundButton
					size='medium'
					iconName='arrowLong'
					deg='90'
					additionalClass={s.prevBtn}
					onClick={() => swiperRef.current?.slidePrev()}
				/>
				<Swiper
					className={s.slider}
					initialSlide={activeIndex}
					effect={'fade'}
					loop
					loopAddBlankSlides
					onSlideChange={() => setActiveIndex(swiperRef.current?.realIndex as number)}
					modules={[EffectFade]}
					slidesPerView={1}
					onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}>
					{projectsList.map((project, i) => (
						<SwiperSlide
							key={i}
							className={s.slide}>
							<Flex className={s.featuresList}>
								{project.features.map((feature, i) => (
									<Tag
										key={i}
										additionalClass={s.projectFeature}
										variant='shade'
										size='medium'>
										{feature}
									</Tag>
								))}
							</Flex>
							<Image
								className={s.projectImage}
								src={project.image}
								width={343}
								height={453}
								alt='Фото проекта'
							/>
							<Tag
								additionalClass={s.projectName}
								variant='shade'
								size='medium'>
								{project.name}
							</Tag>
						</SwiperSlide>
					))}
				</Swiper>
				<RoundButton
					size='medium'
					iconName='arrowLong'
					deg='-90'
					additionalClass={s.nextBtn}
					onClick={() => swiperRef.current?.slideNext()}
				/>
			</div>
		</div>
	)
}

