'use client'
import {RoundButton, Tag, Text} from 'stone-kit';
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import s from './Projects.module.scss';
import Image from "next/image";
import {useRef, useState} from "react";

interface IProjectsProps {
}

export const Projects = ({}: IProjectsProps) => {
    const swiperRef = useRef<SwiperRef>(null);
    const [indexSlide, setIndexSlide] = useState<number>(0)
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

    const projectsList = [
        {
            name: 'Stone Towers',
            image: '/project1Test.jpg',
            features: ['160 000 кв.м', '5 этаж', '3 комнаты'],
        },
        {
            name: 'Stone Coin',
            image: '/project2Test.webp',
            features: ['1 000 000 кв.м', '1 этаж', '2 комнаты'],
        },
        {
            name: 'Stone Savelovskaya',
            image: '/project1Test.jpg',
            features: ['310 100 кв.м', '10 этаж'],
        },
    ]

    return (
        <div className={s.root}>
            <Swiper
                className={s.slider}
                ref={swiperRef}
                slidesPerView={1}
                navigation onSlideChange={(swiper) => {
                setIndexSlide(swiper.activeIndex)
            }}>
                {projectsList.map((e, i) => {
                    return <SwiperSlide key={i}>
                        <div className={s.projectLabel}>
                            <Text className={s.title}>Объекты</Text>

                            <div className={s.featureWrapper}>
                                <Tag
                                    key={1}
                                    additionalClass={s.projectFeature}
                                    variant='shade'
                                    size='medium'>
                                    {'160 000 м2'}
                                </Tag>
                            </div>
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
                                {'STONE Towers'}
                            </Tag>

                            <RoundButton
                                disabled={indexSlide === projectsList.length -1}
                                size='medium'
                                iconName='arrowLong'
                                deg='-90'
                                additionalClass={s.navBtn}
                                onClick={goNext}
                            />

                        </div>

                        <div className={s.projectWrapper}>
                            <Image quality={100} className={s.projectImage} fill src={e.image} alt={`${e.image}`}/>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

