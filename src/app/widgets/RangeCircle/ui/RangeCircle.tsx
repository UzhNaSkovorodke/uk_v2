import { Text } from 'stone-kit'
import s from './RangeCircle.module.scss'
import classNames from 'classnames'

export const CIRCLE_VARIANTS = {
	light: 'light',
	dark: 'dark',
}

export type circleVariant = keyof typeof CIRCLE_VARIANTS

export const RangeCircle = ({
	activeSlide,
	variant = 'light',
	additionalClass = ''
}: {
	activeSlide: number
	additionalClass?: string
	variant?: circleVariant
}) => {
	const radius = 16
	const circumference = 2 * Math.PI * radius
	const cx = classNames.bind(s)

	return (
		<div className={cx(s.root, additionalClass)}>
			<svg
				width={`${radius * 2}`}
				height={`${radius * 2}`}
				viewBox={`0 0 ${radius * 2} ${radius * 2}`}
				className={s.progress}>
				<circle
					className={cx(s.bg, s[`bg_` + variant])}
					cx={`${radius}`}
					cy={`${radius}`}
					r={`${radius - 1}`}
					fill='none'
					stroke='#ffffff7f'
					strokeWidth='1'
				/>
				<circle
					key={activeSlide}
					className={cx(s.fg, s[`fg_` + variant])}
					cx={`${radius}`}
					cy={`${radius}`}
					r={`${radius - 1}`}
					fill='none'
					stroke='#ffffff'
					strokeDasharray={`0px ${circumference}px`}
					strokeWidth='1'
				/>
			</svg>
			<Text className={cx(s.activeNumber, s[`activeNumber_` + variant])}>{activeSlide}</Text>
		</div>
	)
}

