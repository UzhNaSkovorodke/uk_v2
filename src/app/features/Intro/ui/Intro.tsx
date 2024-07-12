'use client'
import {Text} from 'stone-kit'
import s from './Intro.module.scss'
import Image from 'next/image'
import {useClientWidth} from "stone-kit/dist/shared/useClientWidth";

export const Intro = () => {
    const {isTablet, isDesktop} = useClientWidth()

    const getPict = ({isTablet, isDesktop}: { isTablet: boolean, isDesktop: boolean }) => {
        if (isTablet) return '/introTestM.png'
        else if (isDesktop) return '/introTestL.png'
        return '/introTestM.png'
    }

    return (
        <div className={s.root}>
            <Text
                className={s.title}
                html={`Создаем условия<br/> для комфортной жизни`}
            />
            <div className={s.imageWrapper}>
                <Image
                    src={getPict({isTablet, isDesktop})}
                    fill={true}
                    quality={100}
                    className={s.image}
                    alt={'image'}
                />
            </div>
        </div>
    )
}

