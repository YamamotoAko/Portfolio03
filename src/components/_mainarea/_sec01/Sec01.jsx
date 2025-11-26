import WorkNav from '../_worknav/Worknav';
import WorkWraper from '../_workWraper/WorkWraper';
import styles from './Sec01.module.css';

export default function Sec01(){
    return(
        <>
        <section className={styles.wrap}>
            <WorkNav />
            <WorkWraper />
        </section>
        </>
    )
}