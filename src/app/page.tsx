import { AboutCompany } from './features/AboutCompany'
import { Intro } from './features/Intro'
import { News } from './features/News/ui/News'
import { Projects } from './features/Projects'
import { Services } from './features/Sevices'
import { Team } from './features/Team'
import s from './page.module.scss'

export default function Home() {
	return (
		<main className={s.main}>
			<Intro />
			<Services />
			<Projects />
			<Team />
			<AboutCompany />
			<News />
		</main>
	)
}

