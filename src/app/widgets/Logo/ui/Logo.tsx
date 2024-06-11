import Image from 'next/image'
import s from './Logo.module.scss'
import { Text } from 'stone-kit'

interface ILogoProps {
	uk?: boolean
}

export const Logo = ({ uk = false }: ILogoProps) => {
	return (
		<div className={s.wrapper}>
			<Image
				src={'/Logo.svg'}
				width={81}
				height={16}
				alt='Лого'
				className={s.logo}
			/>
			{uk && (
				<Text
					className={s.uk}
					html='управляющая<br/>компания'
				/>
			)}
		</div>
	)
}

