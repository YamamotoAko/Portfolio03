import styles from './Skills.module.css';
import html from '../../../assets/html.png';
import css from '../../../assets/css.png';
import scss from '../../../assets/scss.png';
import js from '../../../assets/js.png';
import react from '../../../assets/react.png';
import vite from '../../../assets/vite.png';
import vscode from '../../../assets/vscode.png';
import figma from '../../../assets/figma.png';
export default function Skills() {
  return (
    <>
      <div className={styles.wraper}>
        <div className={styles.coding}>
          <div className={styles.box}>
            <h2 className={styles.heading}>コーディング</h2>

            <div className={styles.skillbox}>
              <div className={styles.skillImg}>
                <img src={html} alt="html" />
              </div>
              <div className={styles.skillImg}>
                <img src={css} alt="css" />
              </div>
              <div className={styles.skillImg}>
                <img src={scss} alt="scss" />
              </div>
              <div className={styles.skillImg}>
                <img src={js} alt="js" />
              </div>
              <div className={styles.skillImg}>
                <img src={react} alt="react" />
              </div>
              <div className={styles.skillImg}>
                <img src={vite} alt="vite" />
              </div>
              <div className={styles.skillImg}>
                <img src={vscode} alt="vscode" />
              </div>
            </div>
          </div>
          <p>
            HTML/CSS(SCSS)を用いてデザインを忠実に再現し、JavaScriptで動きのある機能を実装できます。現在はReactを学習中で、コンポーネントを使った開発にも取り組んでいます。GitHubを使ってコードのバージョン管理を行っています。
          </p>
        </div>

        <div className={styles.design}>
          <div className={styles.box}>
            <h2 className={styles.heading}>デザイン</h2>

            <div className={styles.skillbox}>
              <div className={styles.skillImg}>
                <img src={figma} alt="figma" />
              </div>
            </div>
          </div>
          <p>
            Figmaを使ってデザインカンプを制作しています。作成したデザインカンプをもとに、コーディングまで一貫して行うことができます。
          </p>
        </div>
      </div>
    </>
  );
}
