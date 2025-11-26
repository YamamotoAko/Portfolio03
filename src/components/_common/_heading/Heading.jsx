import styles from './Heading.module.css';

export default function Heading({ title, id }) {
  return (
    <>
      <h2 className={styles.heading} id={id}>
        {title}
      </h2>
    </>
  );
}
