import { Text } from 'stone-kit'
import s from './RangeCircle.module.scss'

export const RangeCircle = ({ activeSlide }: { activeSlide: number }) => {
	const radius = 16
	const circumference = 2 * Math.PI * radius

	return (
		<div className={s.root}>
			<svg
				width={`${radius * 2}`}
				height={`${radius * 2}`}
				viewBox={`0 0 ${radius * 2} ${radius * 2}`}
				className={s.progress}>
				<circle
					className={s.bg}
					cx={`${radius}`}
					cy={`${radius}`}
					r={`${radius - 1}`}
					fill='none'
					stroke='#ffffff7f'
					strokeWidth='1'
				/>
				<circle
					key={activeSlide}
					className={s.fg}
					cx={`${radius}`}
					cy={`${radius}`}
					r={`${radius - 1}`}
					fill='none'
					stroke='#ffffff'
					strokeDasharray={`0px ${circumference}px`}
					strokeWidth='1'
				/>
			</svg>
			<Text className={s.activeNumber}>{activeSlide}</Text>
		</div>
	)
}

