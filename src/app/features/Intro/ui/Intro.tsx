'use client'
import {Text} from 'stone-kit'
import s from './Intro.module.scss'
import Image from 'next/image'

export const Intro = () => {
    return (
        <div className={s.root}>
            <Text
                className={s.title}
                html={`Создаем условия<br/> для комфортной жизни`}
            />
            <div className={s.imageWrapper}>
                <Image
                    src={'/IntroTest.png'}
                    fill={true}
                    quality={90}
                    className={s.image}
                    alt={'image'}
                />
            </div>
        </div>
    )
}

