import styles from "./ListItem.module.scss";

const ListItem = ({ title, point }) => {
    return (
        <li className={styles.listitem}>
            <div className={styles.title}>{title}</div>
            <div className={styles.point}>+{point}</div>
        </li>
    );
};

export default ListItem;
