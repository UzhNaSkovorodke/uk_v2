'use client'
import {Logo} from '@/src/app/widgets/Logo'
import {Flex, Modal, NewIcon} from 'stone-kit'
import {useContext, useState} from 'react'
import s from './Header.module.scss'
import Button from '@/src/app/widgets/Button'
import RightButtons from "@/src/app/features/Header/RightButton/ui/RightButton";
import {useClientWidth} from "stone-kit/dist/shared/useClientWidth";
import {useScrollPosition} from "@/src/app/widgets/hooks/useScrollPosition";
import {ModalForm} from "@/src/app/features/ModalForm";
import {FormContext} from "@/src/app/providers/formProvider";

export const Header = ({}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const {isMobile} = useClientWidth()
    const scrollPosition = useScrollPosition()

    const form = useContext(FormContext)
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
        <div
            className={`${s.root} ${(isModalOpen && isMobile) ? s.whiteHeader : ''} ${scrollPosition !== 0 ? s.newHeader : ''}`}>
            <Flex className={s.logoMenu}>
                <Logo uk={true} variant={(isModalOpen && isMobile) || (scrollPosition !== 0) ? 'black' : 'white'}/>

                <div className={s.menuTextWrapper}>
                    {menuList.map((e, i) => <a className={s.menuText} key={i} href={e.link}
                                               dangerouslySetInnerHTML={{__html: e.title}}/>
                    )}</div>
            </Flex>

            <RightButtons setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>

            <Modal
                isOpen={isModalOpen}
                emitIsOpen={() => setIsModalOpen(false)}
                additionalClass={s.modal}
                additionalClassModalBody={`${s.modalBody}`}>
                <Flex additionalClass={`${s.modalContent} ${s.modalMobile}`}>
                    {!isMobile && <RightButtons setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>}

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
                        href='http://lk.stonepm.ru/'
                        variant='black'
                        size='large'
                        width='full'
                        post={<NewIcon name='user'/>}>
                        Войти в кабинет
                    </Button>
                </Flex>

                <Flex additionalClass={s.modalTablet}>
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
                        href='https://lk.stonepm.ru/'
                        variant='black'
                        size='large'
                        width='full'
                        post={<NewIcon name='user'/>}>
                        Войти в кабинет
                    </Button>
                </Flex>
            </Modal>

            {form && (
                <ModalForm
                    isFormOpen={form.isFormModalOpen}
                    setIsFormOpen={form?.setIsFormModalOpen}
                />
            )}

        </div>
    )
}

