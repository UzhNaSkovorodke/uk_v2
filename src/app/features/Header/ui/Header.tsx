'use client'
import {Logo} from '@/src/app/widgets/Logo'
import {Flex, Modal, NewIcon, Text} from 'stone-kit'
import {useContext, useState} from 'react'
import s from './Header.module.scss'
import {FormContext} from '@/src/app/providers/formProvider/ui/formProvider'
import Button from '@/src/app/widgets/Button'
import {useClientWidth} from "stone-kit/dist/shared/useClientWidth";

export const Header = ({}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const form = useContext(FormContext)

    const {isDesktop} = useClientWidth()

    const menuList = [
        {
            title: 'Услуги',
            link: '#services',
        },
        {
            title: 'Объекты',
            link: '#projects',
        },
        {
            title: 'Команда',
            link: '#team',
        },
        {
            title: 'О компании',
            link: '#about',
        },
        {
            title: 'Новости',
            link: '#news',
        },
        {
            title: 'Контакты',
            link: '#contacts',
        },
        {
            title: 'Вакансии',
            link: '#footer',
        },
    ]

    if (!menuList) return null
    return (
        <div className={`${s.root} ${isModalOpen ? s.white : ''}`}>
            <Flex>
                <Logo uk={true} variant={isModalOpen ? 'black' : 'white'}/>

                <div className={s.menuTextWrapper}>
                    {menuList.map((e, i) => <Text className={s.menuText} key={i} html={e.title}/>
                    )}</div>
            </Flex>

            <Flex className={s.menuBtn}>
                <Button additionalClass={s.phone}
                        variant='blue'
                        as='link'
                        href='tel:88007752471'>
                    <NewIcon
                        name='phoneFilled'
                        size='16'
                    />
                </Button>

                <Button
                    width='full'
                    variant='blue'
                    as='button'
                    size={isDesktop ? 'medium' : 'medium'}
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
                </Button>

                <Button
                    variant='gray'
                    as='link'
                    href='https://stone.ru'>
                    <NewIcon
                        name='user'
                        color='#141416'
                        size='16'
                    />
                </Button>
                <Button
                    variant='gray'
                    as='button'
                    onClick={() => {
                        !form?.isFormModalOpen && setIsModalOpen((prev) => !prev)
                        form?.isFormModalOpen && form?.setIsFormModalOpen((prev) => !prev)
                    }}>
                    <NewIcon
                        name={isModalOpen || form?.isFormModalOpen ? 'burgerClose' : 'burger'}
                        color='#141416'
                        size='16'
                    />
                </Button>
            </Flex>

            <Modal
                isOpen={isModalOpen}
                emitIsOpen={() => setIsModalOpen}
                additionalClass={s.modal}>
                <Flex additionalClass={s.modalContent}>
                    <Flex
                        fd='column'
                        additionalClass={s.menuList}>
                        {menuList.map((m, i) => {
                            return (
                                <a
                                    key={i}
                                    href={m.link}
                                    className={s.menuItem}
                                    onClick={() => setIsModalOpen(false)}>
                                    {m.title}
                                </a>
                            )
                        })}
                    </Flex>
                    <Button
                        as='link'
                        href='https://stone.ru'
                        variant='black'
                        size='large'
                        width='full'
                        post={<NewIcon name='user'/>}>
                        Войти в кабинет
                    </Button>
                </Flex>
            </Modal>
        </div>
    )
}

