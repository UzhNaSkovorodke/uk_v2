'use client'
import * as YMaps from '@yandex/ymaps3-types'
import {
	YMap,
	YMapComponentsProvider,
	YMapDefaultFeaturesLayer,
	YMapDefaultSchemeLayer,
	YMapMarker,
} from 'ymap3-components'
import s from './YandexMap.module.scss'
import { customLayer, location } from './utils/MapSettings'
import Image from 'next/image'

interface IYandexMapProps {
	className?: string
}

export const YandexMap = ({}: IYandexMapProps) => {
	return (
		<div className={s.root}>
			<YMapComponentsProvider
				apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY ?? ''}
				lang='ru_RU'>
				<YMap
					key='map'
					location={location}
					zoomRange={{ min: 13, max: 15 }}
					zoomRounding='smooth'
					className={s.yamapContainer}
					mode='vector'>
					<YMapDefaultSchemeLayer
						customization={customLayer as YMaps.YMapDefaultSchemeLayerProps['customization']}
					/>
					<YMapDefaultFeaturesLayer />
					<YMapMarker coordinates={[37.69049, 55.7831]}>
						<div
							className={s.marker}
							style={{
								width: '32px',
								height: '32px',
							}}>
							<Image
								src='/marker.svg'
								width={32}
								height={32}
								alt='uk marker'
							/>
						</div>
					</YMapMarker>
				</YMap>
			</YMapComponentsProvider>
		</div>
	)
}

