import 'stone-kit/dist/style.css'
import type {Metadata} from 'next'
import {FormProvider} from './providers/formProvider'
import localFont from 'next/font/local'
import {Header} from './features/Header'
import {Footer} from './features/Footer'
import s from './layout.module.scss'
import './globals.scss'
import 'swiper/css';

const ttHovesPro = localFont({
    src: [
        {
            path: './assets/fonts/TT_Hoves_Pro_Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './assets/fonts/tt-hoves-pro-medium.woff2',
            weight: '500',
            style: 'normal',
        },
    ],
})

export const metadata: Metadata = {
    title: 'Управляющая компания Stone',
    description: 'Управляющая компания Stone',
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='ru'>
        <FormProvider>
            <body className={`${ttHovesPro.className} ${s.body}`}>

            <header className={s.header}>
                <Header/>
            </header>

            <div className={s.contentWrapper}>{children}</div>

            <footer className={s.footer}>
                <Footer/>
            </footer>
            </body>
        </FormProvider>
        </html>
    )
}

