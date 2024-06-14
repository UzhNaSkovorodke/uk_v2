'use client'

import { Flex, Text } from 'stone-kit'
import s from './News.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef, useState } from 'react'
import { Swiper as SwiperClass } from 'swiper/types'
import Image from 'next/image'

interface INewsProps {
	className?: string
}

export const News = ({}: INewsProps) => {
	const [activeIndex, setActiveIndex] = useState<number>(0)
	const swiperRef = useRef<SwiperClass | null>(null)

	const newsList = [
		{
			title: 'График работы дома STONE в мартовские праздники',
			image: '/news1.webp',
			data: '1 июля 2024',
		},
		{
			title: 'График работы дома STONE в мартовские праздники',
			image: '/news1.webp',
			data: '3 июля 2024',
		},
		{
			title: 'График работы дома STONE в мартовские праздники',
			image: '/news1.webp',
			data: '4 июля 2024',
		},
	]

	return (
		<Flex className={s.root}>
			<Text className={s.title}>Новости</Text>
			<Swiper
				className={s.slider}
				loop
				wrapperClass={s.sliderWrapper}
				spaceBetween={8}
				initialSlide={activeIndex}
				onRealIndexChange={(swiperCore) => setActiveIndex(swiperCore.realIndex)}
				slidesPerView={'auto'}
				onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}>
				{newsList.map((n, i) => {
					return (
						<SwiperSlide
							key={i}
							className={s.slide}>
							<Text
								className={s.slideTitle}
								html={n.title}
							/>
							<Image
								src={n.image}
								width={301}
								height={147}
								alt={`${n.title}`}
							/>
							<Text
								className={s.slideData}
								html={`${n.data}`}
							/>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</Flex>
	)
}

