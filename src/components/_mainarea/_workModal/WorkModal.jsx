import styles from './WorkModal.module.css';
import visit from './../../../assets/images/visit.png';

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

            <div className={styles.visit}>
              <a href={item.url} target="_blank">
                <div>
                  <img src={visit} alt="visit" />
                </div>
                <p>サイトを見る</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
