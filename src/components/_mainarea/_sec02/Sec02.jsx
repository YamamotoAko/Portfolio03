import Heading from '../../_common/_heading/Heading';
import Profile from '../_profile/Profile';
import Skills from '../_skills/Skills';
import styles from './Sec02.module.css';
export default function Sec02() {
  return (
    <>
      <section className={styles.secWrap}>
        <Heading title="Profile" id="profile" />
        <div className={styles.box}>
          <Profile />
          <Skills />
        </div>
      </section>
    </>
  );
}
