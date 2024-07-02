'use client'
import { Logo } from '@/src/app/widgets/Logo'
import { Button, Flex, Modal, NewIcon } from 'stone-kit'
import { useContext, useState } from 'react'
import s from './Header.module.scss'
import { FormContext } from '@/src/app/providers/formProvider/ui/formProvider'

export const Header = ({}) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const form = useContext(FormContext)

	const menuList = [
		{
			title: 'О компании',
			link: '#about',
		},
		{
			title: 'Услуги',
			link: '#services',
		},
		{
			title: 'Новости',
			link: '#news',
		},
		{
			title: 'Вакансии',
			link: '#vacancy',
		},
		{
			title: 'Контакты',
			link: '#contacts',
		},
	]

	if (!menuList) return null
	return (
		<div className={s.root}>
			<Logo uk={true} variant={'white'} />
			<Flex gap='2'>
				<Button
					variant='blue'
					size='small'
					as='link'
					href='tel:88007752471'>
					<NewIcon
						name='phoneFilled'
						size='16'
					/>
				</Button>
				<Button
					variant='gray'
					size='small'
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
					size='small'
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
						post={<NewIcon name='user' />}>
						Войти в кабинет
					</Button>
				</Flex>
			</Modal>
		</div>
	)
}

