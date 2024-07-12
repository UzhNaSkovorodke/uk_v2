'use client'
import {Flex, Text} from 'stone-kit'
import s from './News.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useRef, useState} from 'react'
import {Swiper as SwiperClass} from 'swiper/types'
import Image from 'next/image'
import {ModalNews} from '../../ModalNews'
import {useClientWidth} from "stone-kit/dist/shared/useClientWidth";

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
            subTitle: 'Управляющая офисная компания «STONE» — это ваш надежный партнер в создании комфортных и эффективных условий работы',
            text: 'Управляющая офисная компания «STONE» — это ваш надежный партнер в создании комфортных и эффективных условий работы. Мы предлагаем полный спектр услуг по управлению и обслуживанию офисных помещений, включая техническое обслуживание, клининг, охрану и обеспечение комфорта сотрудников. Наша команда профессионалов обеспечивает высокий уровень сервиса и оперативное решение любых возникающих вопросов.' +
                ' С «STONE» вы можете быть уверены, что ваш офис будет работать как часы, позволяя вам сосредоточиться на развитии бизнеса. Мы берем на себя заботы о вашем рабочем пространстве, предоставляя комплексные решения для улучшения его функциональности и эстетики. Доверяйте экспертам — выбирайте «STONE» и наслаждайтесь безупречным сервисом.'
        },
        {
            title: 'График работы дома STONE в мартовские праздники',
            image: '/news1.webp',
            pageImage: '/newsPage.webp',
            date: '3 июля 2024',
            subTitle: 'Управляющая офисная компания «STONE» — это ваш надежный партнер в создании комфортных и эффективных условий работы',
            text: 'Управляющая офисная компания «STONE» — это ваш надежный партнер в создании комфортных и эффективных условий работы. Мы предлагаем полный спектр услуг по управлению и обслуживанию офисных помещений, включая техническое обслуживание, клининг, охрану и обеспечение комфорта сотрудников. Наша команда профессионалов обеспечивает высокий уровень сервиса и оперативное решение любых возникающих вопросов.' +
                ' С «STONE» вы можете быть уверены, что ваш офис будет работать как часы, позволяя вам сосредоточиться на развитии бизнеса. Мы берем на себя заботы о вашем рабочем пространстве, предоставляя комплексные решения для улучшения его функциональности и эстетики. Доверяйте экспертам — выбирайте «STONE» и наслаждайтесь безупречным сервисом.'
        },
        {
            title: 'График работы дома STONE в мартовские праздники',
            image: '/news1.webp',
            pageImage: '/newsPage.webp',
            date: '4 июля 2024',
            subTitle: 'Управляющая офисная компания «STONE» — это ваш надежный партнер в создании комфортных и эффективных условий работы',
            text: 'Управляющая офисная компания «STONE» — это ваш надежный партнер в создании комфортных и эффективных условий работы. Мы предлагаем полный спектр услуг по управлению и обслуживанию офисных помещений, включая техническое обслуживание, клининг, охрану и обеспечение комфорта сотрудников. Наша команда профессионалов обеспечивает высокий уровень сервиса и оперативное решение любых возникающих вопросов.' +
                ' С «STONE» вы можете быть уверены, что ваш офис будет работать как часы, позволяя вам сосредоточиться на развитии бизнеса. Мы берем на себя заботы о вашем рабочем пространстве, предоставляя комплексные решения для улучшения его функциональности и эстетики. Доверяйте экспертам — выбирайте «STONE» и наслаждайтесь безупречным сервисом.'
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

