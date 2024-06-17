'use client'
import { Logo } from '@/src/app/widgets/Logo'
import { Button, Flex, Modal, NewIcon } from 'stone-kit'
import { useState } from 'react'
import s from './Header.module.scss'

export const Header = ({}) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

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
			<Logo uk={true} />
			<Flex gap='2'>
				<Button
					variant='black'
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
					onClick={() => setIsModalOpen((prev) => !prev)}>
					<NewIcon
						name={isModalOpen ? 'burgerClose' : 'burger'}
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

