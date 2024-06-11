'use client'
import { Text } from 'stone-kit'
import s from './Intro.module.scss'
import Image from 'next/image'
import { RangeCircle } from '@/src/app/widgets/RangeCircle'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import { Swiper as SwiperClass } from 'swiper/types'

import 'swiper/css'
import 'swiper/css/effect-fade'

export const Intro = () => {
	const [activeIndex, setActiveIndex] = useState(1)
	const [swiper, setSwiper] = useState<SwiperClass>()

	useEffect(() => {
		if (!swiper) setActiveIndex(1)
	}, [swiper])

	const slides = [
		{
			image: '/IntroTest.webp',
			text: 'ЗАБОТИМСЯ О ДОМЕ<br/>ОТ УБОРКИ ДО КАПРЕМОНТА',
		},
		{
			image: '/IntroTest.webp',
			text: 'приветики',
		},
		{ image: '/IntroTest.webp', text: 'пкухетики' },
	]

	return (
		<div className={s.root}>
			<Text
				className={s.title}
				html={`Создаем условия<br/> для комфортной жизни`}
			/>
			<Swiper
				autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: false }}
				modules={[EffectFade, Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				effect={'fade'}
				loop
				loopAddBlankSlides
				onInit={(init) => setSwiper(init)}
				onSlideChange={() => setActiveIndex((swiper?.realIndex as number) + 1)}
				className={s.slider + ' ' + s.container}>
				{slides.map((slide, i) => (
					<SwiperSlide
						className={s.slide}
						key={i}>
						<Image
							src={slide.image}
							className={s.image}
							width={375}
							height={553}
							alt={'image' + i}
						/>
						<Text
							className={s.text}
							html={slide.text}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<RangeCircle activeSlide={activeIndex}></RangeCircle>
		</div>
	)
}

