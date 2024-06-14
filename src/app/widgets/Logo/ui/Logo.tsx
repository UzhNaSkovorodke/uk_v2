import Image from 'next/image'
import s from './Logo.module.scss'
import { Flex, Text } from 'stone-kit'
import { ILogoProps } from './Logo.types'
import classNames from 'classnames'

export const Logo = ({ uk = false, variant = 'black', between = false }: ILogoProps) => {
	const cx = classNames.bind(s)

	return (
		<Flex className={cx(s.wrapper, { [s.wrapperBetween]: between })}>
			<Image
				src={variant === 'white' ? '/LogoWhite.svg' : '/LogoBlack.svg'}
				width={81}
				height={16}
				alt='Лого'
				className={s.logo}
			/>
			{uk && (
				<Text
					className={cx(s.uk, s[`uk_${variant}`])}
					html='управляющая<br/>компания'
				/>
			)}
		</Flex>
	)
}

