'use client'
import {Button, Flex, NewIcon, Text} from 'stone-kit'
import {useContext, useEffect, useState} from 'react'
import {ModalServices} from '../../ModalServices'
import {ModalForm} from '../../ModalForm'
import {FormContext} from '@/src/app/providers/formProvider/ui/formProvider'
import s from './Services.module.scss'
import Image from 'next/image'
import {useClientWidth} from "@/src/app/shared/useClientWidth";

export const Services = ({}) => {
    const form = useContext(FormContext)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const {isFormModalOpen, setIsFormModalOpen} = form
    const [activeService, setActiveService] = useState<number>(0)
    const {isMobile, isDesktop} = useClientWidth()

    const servicesList = [
        {
            title: 'Бытовые услуги',
            description: 'Поддерживаем дома и придомовые территории',
            text: 'Управляющая офисная компания «STONE» — это ваш надежный партнер в создании комфортных и эффективных условий работы. Мы предлагаем полный спектр услуг по управлению и обслуживанию офисных помещений, включая техническое обслуживание, клининг, охрану и обеспечение комфорта сотрудников. Наша команда профессионалов обеспечивает высокий уровень сервиса и оперативное решение любых возникающих вопросов. С «STONE» вы можете быть уверены, что ваш офис будет работать как часы, позволяя вам сосредоточиться на развитии бизнеса. Мы берем на себя заботы о вашем рабочем пространстве, предоставляя комплексные решения для улучшения его функциональности и эстетики. Доверяйте экспертам — выбирайте «STONE» и наслаждайтесь безупречным сервисом.',
            btnText: 'Подробнее',
            image: '/card1Test.png',
            pageImage: '/servicePage.webp',
        },
        {
            title: 'Лакшери услуги',
            description: 'Поддерживаем дома и не только',
            btnText: 'Подробнее',
            text: 'Лухари текст',
            image: '/card2Test.png',
            pageImage: '/servicePage.webp',
        },
        {
            title: 'Пятерочка',
            description: 'Поддерживаем',
            btnText: 'Подробнее',
            text: 'Кушанье',
            image: '/card3Test.png',
            pageImage: '/servicePage.webp',
        },
    ]

    useEffect(() => {
    }, [form?.isFormModalOpen])

    if (!servicesList) return null

    return (
        <Flex
            className={s.root}
            id='services'>
            <Flex className={s.titleWrapper} ai={'center'}>
                <Text className={s.title}>Наши услуги</Text>

                {!isMobile && <Button
                    width='full'
                    variant='blue'
                    as='button'
                    size='small'
                    additionalClass={`${s.btn} ${s.btn_call}`}
                    post={
                        <NewIcon
                            name='arrowLong'
                            deg='-90'
                            color='white'
                        />
                    }
                    onClick={() => form?.setIsFormModalOpen(true)}>
                    Оставить обращение
                </Button>}
            </Flex>
            <Flex className={s.cards}>
                {servicesList.map((e, i) => {
                    return <div key={i} className={s.cardWrapper}>
                        <Image fill={true}
                               src={e.image}
                               quality={90}
                               className={s.image}
                               alt={'image'}/>
                        <Flex className={s.cardInf}>
                            <Text className={s.cardTitle} html={e.title}/>
                            <Button
                                variant='whiteStroke'
                                size={isDesktop ? 'large' : 'large'}
                                as='button'
                                width={isMobile ? 'full' : 'auto'}
                                additionalClass={s.btn}
                                onClick={() => {
                                    setIsModalOpen(true)
                                    setActiveService(i)
                                }}>
                                Подробнее
                            </Button>
                        </Flex>
                    </div>
                })}
            </Flex>
            {isMobile && <Button
                width='full'
                variant='blue'
                as='button'
                size='large'
                additionalClass={`${s.btn} ${s.btn_call}`}
                post={
                    <NewIcon
                        name='arrowLong'
                        deg='-90'
                        color='white'
                    />
                }
                onClick={() => form?.setIsFormModalOpen(true)}>
                Оставить обращение
            </Button>}
            <ModalServices
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                service={servicesList[activeService]}
            />
            {isFormModalOpen && (
                <ModalForm
                    isFormOpen={isFormModalOpen}
                    setIsFormOpen={setIsFormModalOpen}
                />
            )}
        </Flex>
    )
}
