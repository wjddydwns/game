import { HiBellAlert } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import styles from './Profile.module.css'
export default function Profile() {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.round}>
                <HiBellAlert size="24"/> 
            </div>
            <div className={styles.Profile}>
            <CgProfile size="24"/>
            </div>
            <span style={{color:"white" ,cursor:"pointer"}}>로그인</span>
            <span style={{color:"white",cursor:"pointer"}}>회원 가입</span>
        </div>
    )
}