import Link from 'next/link'
import styles from '@/styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">{/* Linkタグにクラスなどをつけられないので、あえて<a>タグを中に入れている  */}
                    <a>DJ events</a>
                </Link>
            </div>

            <nav>
               <ul>
                   <li>
                        <Link href="/events">
                            <a>Events</a>
                        </Link>
                   </li>
               </ul>
            </nav>
        </header>
    )
}
