import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import Context from "../../context/Context";
import Layout from "./layout";
import styles from "../../styles/Item.module.scss";
import Modal from "../../components/UI/Modal";
import checkImg from "../../src/images/check.svg";

const Item = () => {
    const { actions, completedActions, addAction } = useContext(Context);
    const router = useRouter();
    const { id } = router.query;

    const [selectedItem, setSelectedItem] = useState(null);
    const [isEarn, setIsEarn] = useState(false);

    useEffect(() => {
        if (id) {
            const action = actions.find((item) => item.id === parseInt(id));
            setSelectedItem(action);
            if (!action) {
                router.push("/app");
            }
        }
    }, [actions, id, router]);

    const earnClickHandler = () => {
        addAction(actions.find((item) => item.id === parseInt(id)));
        setIsEarn(true);
    };

    const closeModalHandler = () => {
        router.push("/app");
    };

    const closeModal = (
        <Modal
            image={checkImg}
            title="Congratulations!"
            subtitle="desc"
            button="Close"
            onClick={closeModalHandler}
        />
    );

    let earnModal = (
        <Modal
            image={selectedItem?.image}
            title={selectedItem?.title}
            subtitle={selectedItem?.description}
            point={selectedItem?.point}
            onClick={earnClickHandler}
            button="Earn points"
        />
    );

    if (completedActions.find((item) => item.id === parseInt(id))) {
        earnModal = (
            <Modal
                image={selectedItem?.image}
                title={selectedItem?.title}
                subtitle={selectedItem?.description}
                point={selectedItem?.point}
                onClick={earnClickHandler}
                button="You completed before"
                disabled
            />
        );
    }

    let content = null;
    if (!isEarn) {
        content = earnModal;
    } else {
        content = closeModal;
    }

    return (
        <Layout>
            <style jsx global>{`
                body {
                    background: #ffcc33;
                }
            `}</style>

            <div className={styles.item}>
                <div className={styles.modal}>{content}</div>
            </div>
        </Layout>
    );
};

export default Item;
