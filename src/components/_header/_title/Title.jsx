import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Title.module.css";

export default function Title() {
  const text = "Portfolio"; // ←好きな文字に変更OK
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className={styles.container}>
      
      {/* Gooey filter (必須) */}
      <svg className={styles.gooeyFilter}>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0  
              0 1 0 0 0  
              0 0 1 0 0  
              0 0 0 30 -10"
          />
        </filter>
      </svg>

      <div className={styles.gooey}>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            className={styles.char}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            animate={{
              scale: hoverIndex === i ? 1.8 : 1.8,
              filter: hoverIndex === i ? "blur(8px)" : "blur(0px)",
              borderRadius: hoverIndex === i ? "60%" : "0%"
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}