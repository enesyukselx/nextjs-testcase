import styles from "./ListItem.module.scss";
import Image from "next/image";

const ListItem = ({ imgUrl, title, description, point, onClick }) => {
    return (
        <div className={styles.listitem} onClick={onClick}>
            <div className={styles.image}>
                <Image
                    src={imgUrl}
                    alt="Image"
                    width={36}
                    height={36}
                    layout="fixed"
                />
            </div>
            <div className={styles.text}>
                <h5>{title}</h5>
                <h6>{description}</h6>
            </div>
            <div className={styles.point}>+{point}</div>
        </div>
    );
};

export default ListItem;
