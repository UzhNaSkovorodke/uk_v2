'use client'
import {Flex, RoundButton, Tag, Text} from 'stone-kit';
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import s from './Projects.module.scss';
import Image from "next/image";
import {useRef, useState} from "react";
import {useClientWidth} from "stone-kit/dist/shared/useClientWidth";

interface IProjectsProps {
}

export const Projects = ({}: IProjectsProps) => {
    const swiperRef = useRef<SwiperRef>(null);
    const [indexSlide, setIndexSlide] = useState<number>(0)

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

    const projectsList = [
        {
            name: 'Stone Towers',
            image: '/projectTest1.png',
            features: ['160 000 кв.м', '5 этаж', '3 комнаты'],
        },
        {
            name: 'Stone Coin',
            image: '/projectTest1.png',
            features: ['1 000 000 кв.м', '1 этаж', '2 комнаты'],
        },
        {
            name: 'Stone Savelovskaya',
            image: '/projectTest1.png',
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
                        <div className={s.projectWrapper}>
                            <Image quality={100} className={s.projectImage} fill src={e.image} alt={`${e.image}`}/>

                            <div className={s.projectLabel}>
                                <Text className={s.title}>Объекты</Text>
                                <Flex jc={'between'} ai={'center'} className={s.featureWrapper}>
                                    <div className={s.features}>
                                        <Tag
                                            size={isDesktop ? 'large' : 'medium'}
                                            key={1}
                                            variant='shade'>
                                            {'Готовность 2024'}
                                        </Tag>
                                    </div>
                                </Flex>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>

            <div className={s.navigation}>
                <RoundButton
                    size={isDesktop ? 'large' : 'medium'}
                    iconName='arrowLong'
                    deg='90'
                    disabled={indexSlide === 0}
                    additionalClass={s.navBtn}
                    onClick={goPrev}
                />

                <Tag
                    additionalClass={s.tagProj}
                    variant='shade'
                    size={isDesktop ? 'large' : 'medium'}>
                    {projectsList[indexSlide].name}
                </Tag>

                <RoundButton
                    disabled={indexSlide === projectsList.length - 1}
                    size={isDesktop ? 'large' : 'medium'}
                    iconName='arrowLong'
                    deg='-90'
                    additionalClass={s.navBtn}
                    onClick={goNext}
                />
            </div>
        </div>
    )
}

