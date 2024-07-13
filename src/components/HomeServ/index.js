import styles from '@/components/HomeServ/HomeServ.module.css';
import { PiHouseLineFill, PiSolarPanelFill} from "react-icons/pi";
import { TbBuildingFactory2 } from "react-icons/tb";
const HomeServ = () => {
    return ( 
        <section className={`${styles.content} ${styles.services}`}>
            <div className={styles.maxWidth}>
                <h2 className={styles.title}>Serviços</h2>
                <div className={styles.servContent}>
                    <div className={styles.card}>
                    <div className={styles.box}>
                       <i> <PiHouseLineFill /></i>
                        <div className={styles.text}>Serviços elétricos residenciais</div>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.box}>
                        <i> <TbBuildingFactory2 /></i>
                        <div className={styles.text}>Serviços elétricos em empresas</div>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                    </div>
                </div>

                    <div className={styles.card}>
                    <div className={styles.box}>
                        <i><PiSolarPanelFill /></i>
                        <div className={styles.text}>Instação de paineis  solares</div>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random</p>
                    </div>
                </div>
            </div>
        </div>

        </section>
    );
}

export default HomeServ;