import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

import Wallpaper from '../assets/wallpaper.svg'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src={Wallpaper} alt="wallpaper" />

        <div className={styles.profile}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/48223561?v=4" alt="profile" />
            <strong>Erika Perciliano</strong>
            <span>Software Engineer</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Edit your profile
            </a>
        </footer>
    </aside>
  )
}
