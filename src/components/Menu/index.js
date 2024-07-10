import { useState } from 'react';
import styles from '@/components/Menu/Menu.module.css';
import Link from 'next/link';



const Menu = () => {

    const [isActive, setIsActive] = useState(false);

    const activeMenu = () => {
        setIsActive(!isActive);
    }
    return ( 
        <nav className={styles.navbar}>
                    <div className={styles.maxWidth}>
                        <div className={styles.logo}>
                            <Link href="/">Eco-Eletrica</Link>
                        </div>
                        <ul className={`${styles.menu} ${ /*isActive && styles.active*/ isActive ? styles.active : ""}`} id={styles.menuSite}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="about">Sobre Empresa</Link></li>
                            <li><Link href="contact">Contato</Link></li>

                        </ul>
                        <div className={styles.menuBtn} id={styles.menuBtn}>
                           {/*} <i className="fa-solid fa-bars-staggered" id="menuIcon"></i>*/}
                           
                           <i id={styles.menuIcon} onClick={activeMenu}>Ícone</i>
                        </div>
                    </div>
                </nav>
    )

}

export default Menu;