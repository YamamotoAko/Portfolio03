import styles from './WorkWrap.module.css';

export default function WorkWrap({ onClick, firstImg, name, subName }) {
  return (
    <>
      <div className={styles.wrap} onClick={onClick}>
        <div className={styles.imgbox}>
          <img src={firstImg} alt={name} />
        </div>
        <p className={styles.text}>{`${name}${subName}`}</p>
      </div>
    </>
  );
}
