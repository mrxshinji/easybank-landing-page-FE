import Image from 'next/image';
import styles from './article.module.css'

type Props = {
    author: string,
    title: string,
    body: string,
    image: string,
    alt: string,
}

const SectionOneItem = ({author, title, body, image, alt}: Props) => {
  return (
    <div className={styles.container}>
        <div className={styles.imageWrapper}>
            <Image src={image} alt={alt} fill />
        </div>
        <div className={styles.text}>
            <p>{author}</p>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    </div>
  )
};

export default SectionOneItem;
