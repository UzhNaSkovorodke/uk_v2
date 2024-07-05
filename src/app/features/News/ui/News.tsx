'use client'
import {Flex, Text} from 'stone-kit'
import s from './News.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useRef, useState} from 'react'
import {Swiper as SwiperClass} from 'swiper/types'
import Image from 'next/image'
import {ModalNews} from '../../ModalNews'
import {useClientWidth} from "@/src/app/shared/useClientWidth";

interface INewsProps {
    className?: string
}

export const News = ({}: INewsProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [newsIndex, setNewsIndex] = useState<number>(0)
    const {isMobile, isTablet} = useClientWidth()

    const swiperRef = useRef<SwiperClass | null>(null)

    const newsList = [
        {
            title: 'График работы дома STONE в мартовские праздники',
            image: '/news1.webp',
            pageImage: '/newsPage.webp',
            date: '1 июля 2024',
            text: 'dfgdfgdfgdfg',
        },
        {
            title: 'График работы дома STONE в мартовские праздники',
            image: '/news1.webp',
            pageImage: '/newsPage.webp',
            date: '3 июля 2024',
            text: 'dfsdfsdfsdfsdfsdfsfsfsdf',
        },
        {
            title: 'График работы дома STONE в мартовские праздники',
            image: '/news1.webp',
            pageImage: '/newsPage.webp',
            date: '4 июля 2024',
            text: 'aasda ass[s[dpspdsd]]',
        },
    ]

    return (
        <Flex
            className={s.root}
            id='news'>
            <Text className={s.title}>Новости</Text>
            <Swiper
                className={s.slider}
                wrapperClass={s.sliderWrapper}
                spaceBetween={isMobile ? 8 : 16}
                initialSlide={activeIndex}
                onRealIndexChange={(swiperCore) => setActiveIndex(swiperCore.realIndex)}
                slidesPerView={isMobile ? 'auto' : isTablet ? 2 : 3}
                onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}>
                {newsList.map((n, i) => {
                    return (
                        <SwiperSlide
                            key={i}
                            className={s.slide}
                            onClick={() => {
                                setIsModalOpen(true)
                                setNewsIndex(i)
                            }}>
                            <Text
                                className={s.slideTitle}
                                html={n.title}
                            />
                            <div className={s.wrapperImage}>
                                <Image
                                    src={n.image}
                                    fill
                                    alt={`${n.title}`}
                                />
                            </div>
                            <Text
                                className={s.slideData}
                                html={`${n.date}`}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <ModalNews
                news={newsList[newsIndex]}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}></ModalNews>
        </Flex>
    )
}

