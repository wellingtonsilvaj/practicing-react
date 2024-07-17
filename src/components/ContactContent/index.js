import styles from '@/components/ContactContent/ContactContent.module.css';
import { FaRegUser, FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";



const ContactContent = () => {

    return (
        <div className={`${styles.column} ${styles.left}`}>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</p>
        <div className={styles.icons}>
            <div className={styles.row}>
                <i><FaRegUser /></i>
                <div className={styles.info}>
                    <div className={styles.head}>
                        Empresa
                    </div>
                    <div className={styles.subTitle}>
                        Eco Eletrica
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <i><MdOutlineLocationOn/></i>
                <div className={styles.info}>
                    <div className={styles.head}>
                        Endereço
                    </div>
                    <div className={styles.subTitle}>
                        Camocim de são felix
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <i>< FaRegEnvelope/></i>
                <div className={styles.info}>
                    <div className={styles.head}>
                        E-mail
                    </div>
                    <div className={styles.subTitle}>
                        eco@eletrica.com.br
                    </div>
                </div>
            </div>

        </div>
    </div>

    );
}

export default ContactContent;