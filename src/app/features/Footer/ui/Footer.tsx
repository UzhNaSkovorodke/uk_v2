'use client'
import {Logo} from '@/src/app/widgets/Logo'
import s from './Footer.module.scss'
import {Button, Flex, Text} from 'stone-kit'
import {YandexMap} from '@/src/app/widgets/YandexMap'
import {FormContext} from '@/src/app/providers/formProvider'
import {useContext} from 'react'
import {ModalForm} from '../../ModalForm'

interface IFooterProps {
    className?: string
}

export const Footer = ({}: IFooterProps) => {
    const form = useContext(FormContext)

    const infoList = [
        {
            title: 'Единый номер',
            text: '8 800 775 24 71',
        },
        {
            title: 'Единая почта',
            text: 'example@gmail.com',
        },
        {
            title: 'Адрес',
            text: 'Москва, ул. Пушкина, д 52',
        },
        {
            title: 'Время работы',
            text: 'ПН-ВС с 9:00 до 21:00',
        },
    ]

    return (
        <Flex
            className={s.root}
            id='contacts'>
            <Flex className={s.topHeader}>
                <Flex className={s.logoWrapper}>
                    <Logo
                        variant='white'
                        uk
                    />
                </Flex>

                <Flex className={s.btnWrapper}>
                    <Button
                        as='link'
                        href='https://hh.ru'
                        variant='shade'
                        width='full'
                        size='large'>
                        Смотреть вакансии
                    </Button>
                    <Button
                        as='button'
                        variant='blue'
                        width='full'
                        size='large'
                        onClick={() => form?.setIsFormModalOpen(true)}>
                        Оставить обращение
                    </Button>
                </Flex>
            </Flex>

            <Flex className={s.infoList}>
                {infoList.map((item, i) => {
                    return (
                        <Flex
                            key={i}
                            className={s.infoCard}>
                            <Text
                                className={s.infoTitle}
                                html={`${item.title}`}
                            />
                            <Text
                                className={s.infoText}
                                html={`${item.text}`}
                            />
                        </Flex>
                    )
                })}
            </Flex>


            <YandexMap/>

            {form && (
                <ModalForm
                    isFormOpen={form.isFormModalOpen}
                    setIsFormOpen={form?.setIsFormModalOpen}
                />
            )}


        </Flex>
    )
}

