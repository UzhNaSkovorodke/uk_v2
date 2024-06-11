import { Logo } from '@/src/app/widgets/Logo'
import s from './Header.module.scss'
import { Button, Flex, NewIcon } from 'stone-kit'

interface IHeaderProps {
	className?: string
}

export const Header = ({}: IHeaderProps) => {
	return (
		<div className={s.root}>
			<Logo uk={true} />
			<Flex gap='2'>
				<Button
					variant='black'
					size='small'
					as='button'>
					<NewIcon
						name='phoneFilled'
						size='16'
					/>
				</Button>
				<Button
					variant='gray'
					size='small'
					as='button'>
					<NewIcon
						name='user'
						color='#141416'
						size='16'
					/>
				</Button>
				<Button
					variant='gray'
					size='small'
					as='button'>
					<NewIcon
						name='burger'
						color='#141416'
						size='16'
					/>
				</Button>
			</Flex>
		</div>
	)
}

