import styles from '@/components/HomePrem/HomePrem.module.css'
import Link from 'next/link';

const HomePrem = () => {
    return (
        <section className={`${styles.content} ${styles.premium}`}>
        <div className={styles.maxWidth}>
            <h2 className={styles.title}>Serviço Premium</h2>
            <div className={styles.premiumContent}>
                <div className={`${styles.column} ${styles.left}`}>
                    <img src="/images/homePrem/premium_v6.jpg" alt="Serviço premium" />
                </div>
                <div className={ `${styles.column} ${styles.right}`}>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet,
                         consectetur adipiscing elit. Aliquam laoreet porta rhoncus.
                    </div>
                    <p>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <Link href="/contact">Contato</Link>
                </div>
            </div>
        </div>
    </section>

    );
}

export default HomePrem;