import { useContext } from "react";
import styles from "./List.module.scss";
import Context from "../../context/Context";

import ListItem from "./ListItem";

const List = () => {
    const { completedActions } = useContext(Context);

    return (
        <div className={styles.list}>
            <ul>
                {completedActions.map((item) => (
                    <ListItem
                        key={item.id}
                        title={item.title}
                        point={item.point}
                    />
                ))}
            </ul>
        </div>
    );
};

export default List;
