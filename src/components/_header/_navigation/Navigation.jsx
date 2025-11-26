import styles from './Navigation.module.css';
import navList from './navList';

export default function Navigation() {
  return (
    <ul className={styles.nav}>
      {navList.map((item) => (
        <li key={item.id}>
          <a href={`#${item.href}`}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
