import styles from './Heading.module.css';

export default function Heading({title}){
    return(
        <>
        <h2 className={styles.heading}>{title}</h2>
        </>
    )
}