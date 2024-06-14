import { Logo } from '@/src/app/widgets/Logo'
import s from './Footer.module.scss'
import { Flex } from 'stone-kit'

interface IFooterProps {
	className?: string
}

export const Footer = ({}: IFooterProps) => {
	return (
		<div className={s.root}>
			<Flex className={s.logoWrapper}>
				<Logo
					variant='white'
					between
					uk
				/>
			</Flex>
		</div>
	)
}

