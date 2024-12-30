import styles from './Category.module.css'
import { TfiCup } from "react-icons/tfi";
import { TbChartBarPopular } from "react-icons/tb";
import { LuCrown } from "react-icons/lu";
export default function Catergory() {
    return (
        <div className={styles.Wrapper}>
            <h2>홈</h2>
            <h2>리뷰</h2>
            <div className={styles.Catergory}>
                <h2>TOP</h2>
                <div className={styles.content}>
                    <div className={styles.Sqaure}>
                        <TfiCup size="20" color='black' />
                    </div>
                    <span>Best of the year</span>
                </div>
                <div className={styles.content}>
                    <div className={styles.Sqaure}>
                        <TbChartBarPopular size="20" color='black'  />
                    </div>
                    <span>Popular in 2020</span>
                </div>
                <div className={styles.content}>
                    <div className={styles.Sqaure}>
                        <LuCrown size="20"  color='black' />
                    </div>
                    <span>All time top 250</span>
                </div>
            </div>
            </div>

    )
}