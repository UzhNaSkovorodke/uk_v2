'use client'

import {useRef, useState} from 'react'
import {RoundButton, Tag, Text} from 'stone-kit'
import s from './Team.module.scss'
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {useClientWidth} from "stone-kit/dist/shared/useClientWidth";

export const Team = () => {
    const [indexSlide, setIndexSlide] = useState<number>(0)
    const swiperRef = useRef<SwiperRef>(null)
    const {isDesktop} = useClientWidth()

    const goNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };


    const teamList = [
        {
            imgTitle: 'Ирина Севалкина ',
            imgSubtitle: 'Генеральный директор',
            image: '/team1.jpg',
        },
        {
            imgTitle: 'Не Севалкина ',
            imgSubtitle: 'Генеральный директор',
            image: '/team2.jpg',
        },
    ]

    return (
        <div className={s.root}>
            <Text className={s.title}>Команда</Text>

            <div className={s.navigationWrapper}>
                <div className={s.navigation}>
                    <RoundButton
                        size={isDesktop ? 'large' : 'medium'}
                        iconName='arrowLong'
                        deg='90'
                        disabled={indexSlide === 0}
                        additionalClass={s.navBtn}
                        onClick={goPrev}
                    />

                    <Tag style={{'backgroundColor': '#141416'}}
                         variant='shade'
                         size={isDesktop ? 'large' : 'medium'}>
                        {`${indexSlide + 1} из ${teamList.length}`}
                    </Tag>

                    <RoundButton
                        disabled={indexSlide === teamList.length - 1}
                        size={isDesktop ? 'large' : 'medium'}
                        iconName='arrowLong'
                        deg='-90'
                        additionalClass={s.navBtn}
                        onClick={goNext}
                    />
                </div>
            </div>

            <Swiper
                className={s.slider}
                ref={swiperRef}
                slidesPerView={1}
                navigation onSlideChange={(swiper) => {
                setIndexSlide(swiper.activeIndex)
            }}>
                {teamList.map((e, i) => {
                    return <SwiperSlide key={i}>
                        <div className={s.slide}>
                            <div className={s.slideContent}>
                                <div className={s.imageWrapper}>
                                    <Image src={e.image} alt={'architecture'} fill/>
                                </div>
                                <Text className={s.imgSubTitle} html={e.imgSubtitle}/>
                                <Text className={s.imgTitle} html={e.imgTitle}/>
                            </div>
                        </div>

                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

