'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import {useState} from 'react'
import Image from 'next/image'
import {Flex, Text} from 'stone-kit'
import classNames from 'classnames'
import {RangeCircle} from '@/src/app/widgets/RangeCircle'
import {Autoplay} from 'swiper/modules'
import s from './Team.module.scss'

export const Team = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0)
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
				slidesPerView={'auto'}
				//autoplay={{ delay: 10000, disableOnInteraction: false, pauseOnMouseEnter: false }}
				modules={[Autoplay]}
				loop
				className={s.slider}
				spaceBetween={10}
				onRealIndexChange={(swiperCore) => setActiveIndex(swiperCore.realIndex)}>
				{teamList.map((t, i) => (
					<SwiperSlide
						key={i}
						className={cx(s.slide)}>
						<div className={'imageWrapper'}

						>
						<Image
							src={t.image}
							fill
							className={cx(s.image, { [s.activeSlide]: i === activeIndex })}
							alt={`${t.name}`}
						/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div>
				<Text className={s.jobTitle}>{teamList[activeIndex]?.post}</Text>
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

