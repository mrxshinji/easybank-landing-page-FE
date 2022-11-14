import Image from 'next/image';
import styles from './sectionOneItem.module.css'

type Props = {
    title: string,
    body: string,
    logo: string,
}

const SectionOneItem = ({title, body, logo}: Props) => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <Image src={logo} alt="Hand holding credit card logo" fill />
        </div>
        <div className={styles.text}>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    </div>
  )
};

export default SectionOneItem;
