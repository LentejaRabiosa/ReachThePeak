import styles from './Logo.module.css'
import { Advent_Pro } from 'next/font/google'

const advent_pro = Advent_Pro({
    weight: ['900'],
    style: ['normal'],
    subsets: ['latin'],
})

export function Logo({ children }) {
    return (
        <span className={`${advent_pro.className} ${styles.logo}`}>
            <span className={styles.reach}>Reach</span>
            <span className={styles.the}>The</span>
            <span className={styles.peack}>Peak</span>
        </span>
    )
}