import styles from './WorkNav.module.css';
import workList from './../workList';
import Heading from '../../_common/_heading/Heading';
export default function WorkNav(){
    return(
        <div className={styles.menu}>
          <Heading title="Work" />
        <ul className={styles.wrap}>
      {workList.map((item) => (
        <li key={item.id}>
          <a href="#">{item.name}</a>
        </li>
      ))}
        </ul>
        </div>
    )
}