import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Context from "../../context/Context";
import styles from "./List.module.scss";

import ListItem from "./ListItem";

const List = () => {
    const router = useRouter();
    const { setActions } = useContext(Context);
    const [list, setList] = useState([]);

    async function fetchActions() {
        try {
            const res = await fetch("/api");
            const data = await res.json();
            setList(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchActions();
        setActions(list);
    }, [list, setActions]);

    const itemClickHandler = (id) => {
        router.push(`/app/${id}`);
    };

    const content = (
        <div className={styles.list}>
            <p>Actions to be completed</p>

            {list.map((item) => (
                <ListItem
                    key={item.id}
                    imgUrl={item.image}
                    title={item.title}
                    description={item.description}
                    point={item.point}
                    onClick={itemClickHandler.bind(null, item.id)}
                />
            ))}
        </div>
    );

    return content;
};

export default List;
