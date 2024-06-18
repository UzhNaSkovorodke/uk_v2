'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef, useState } from 'react'
import { Swiper as SwiperClass } from 'swiper/types'
import Image from 'next/image'
import { Flex, Text } from 'stone-kit'
import classNames from 'classnames'
import { RangeCircle } from '@/src/app/widgets/RangeCircle'
import { Autoplay } from 'swiper/modules'
import s from './Team.module.scss'

export const Team = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0)
	const swiperRef = useRef<SwiperClass | null>(null)
	const cx = classNames.bind(s)

	const teamList = [
		{
			name: 'Иванов Иван Иванович',
			post: 'Генеральный директор',
			image: '/team1.webp',
		},
		{
			name: 'Тетя Клава',
			post: 'Уборщик',
			image: '/team1.webp',
		},
		{
			name: 'Петя',
			post: 'заправщик',
			image: '/team1.webp',
		},
		{
			name: 'Вася',
			post: 'врач',
			image: '/team1.webp',
		},
		{
			name: 'Маша',
			post: 'в кашу',
			image: '/team1.webp',
		},
	]

	return (
		<div className={s.root}>
			<Text className={s.title}>Команда</Text>
			<Swiper
				// autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: false }}
				modules={[Autoplay]}
				loop
				longSwipes={false}
				wrapperClass={s.sliderWrapper}
				spaceBetween={10}
				onRealIndexChange={(swiperCore) => setActiveIndex(swiperCore.realIndex)}
				slidesPerView={'auto'}
				onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}>
				{teamList.map((t, i) => (
					<SwiperSlide
						key={i}
						className={cx(
							s.slide,
							{ [s.activeSlide]: i === activeIndex },
							{ [s.inactiveSlide]: i !== activeIndex }
						)}>
						<Image
							src={t.image}
							width={64}
							height={64}
							className={cx(s.image)}
							alt={`${t.name}`}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div>
				<Text className={s.jobTtitle}>{teamList[activeIndex]?.post}</Text>
				<Flex additionalClass={s.nameWrapper}>
					<Text className={s.nameTitle}>{teamList[activeIndex]?.name}</Text>
					<RangeCircle
						activeSlide={activeIndex + 1}
						variant='dark'
						additionalClass={s.range}
					/>
				</Flex>
			</div>
		</div>
	)
}

