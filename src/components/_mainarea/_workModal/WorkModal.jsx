import styles from './WorkModal.module.css';

export default function WorkModal({ item, setIsOpen }) {
  return (
    <div className={styles.overlay}>
      <button onClick={() => setIsOpen(false)} className={styles.close}>
        close
      </button>

      <div className={styles.box}>
        <div className={styles.imgContainer}>
          {item.img.map((img, index) => (
            <div key={index} className={styles.imgbox}>
              <img src={img} alt={`img-${index}`} />
            </div>
          ))}
        </div>

        <div className={styles.textContainer}>
          <h2>
            {item.name}
            <span>{item.subName}</span>
          </h2>
          <p>{item.text}</p>

          <div className={styles.buttom}>
            <p className={styles.skillHeading}>使用技術とツール</p>
            <div className={styles.skillContainer}>
              {item.skill.map((icon, index) => (
                <div key={index} className={styles.skillBox}>
                  <img src={icon} alt={`skill-${index}`} />
                </div>
              ))}
            </div>
            <p>
              <a href={item.url} target="_blank">
                サイトを見る
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
