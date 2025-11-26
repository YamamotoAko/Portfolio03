import styles from './WorkWrap.module.css';

export default function WorkWrap({ onClick, firstImg, name, subName, id }) {
  return (
    <>
      <div className={styles.wrap} onClick={onClick} id={id}>
        <div className={styles.imgbox}>
          <img src={firstImg} alt={name} />
        </div>
        <p className={styles.text}>{`${name}${subName}`}</p>
      </div>
    </>
  );
}
