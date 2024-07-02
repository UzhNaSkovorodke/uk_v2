'use client'

import {useRef, useState} from 'react'
import {RoundButton, Tag, Text} from 'stone-kit'
import classNames from 'classnames'
import s from './Team.module.scss'
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import Image from "next/image";

export const Team = () => {
    const [indexSlide, setIndexSlide] = useState<number>(0)
    const swiperRef = useRef<SwiperRef>(null)

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

    const cx = classNames.bind(s)

    const teamList = [
        {
            imgTitle: 'Ирина Севалкина ',
            imgSubtitle: 'Генеральный директор',
            image: '/team1.webp',
        },
        {
            imgTitle: 'Ирина Севалкина ',
            imgSubtitle: 'Генеральный директор',
            image: '/team1.webp',
        },
    ]

    return (
        <div className={s.root}>
            <Text className={s.title}>Команда</Text>

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
                                    <Image src={'/team1.webp'} alt={'architecture'} fill/>
                                </div>
                                <Text className={s.imgTitle} html={e.imgTitle}/>
                                <Text className={s.imgSubTitle} html={e.imgSubtitle}/>
                            </div>

                            <div className={s.navigation}>
                                <RoundButton
                                    size='medium'
                                    iconName='arrowLong'
                                    deg='90'
                                    disabled={indexSlide === 0}
                                    additionalClass={s.navBtn}
                                    onClick={goPrev}
                                />

                                <Tag
                                    variant='shade'
                                    size='medium'>
                                    {'1 из 3'}
                                </Tag>

                                <RoundButton
                                    disabled={indexSlide === teamList.length - 1}
                                    size='medium'
                                    iconName='arrowLong'
                                    deg='-90'
                                    additionalClass={s.navBtn}
                                    onClick={goNext}
                                />
                            </div>
                        </div>

                    </SwiperSlide>
                })}
            </Swiper>

        </div>
    )
}

