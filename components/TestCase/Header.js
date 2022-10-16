import { useRouter } from "next/router";
import { useContext } from "react";

import Context from "../../context/Context";
import styles from "./Header.module.scss";

const Header = () => {
    const { points } = useContext(Context);

    const logoClickHandler = () => {
        router.push("/app");
    };

    const pointsClickHandler = () => {
        router.push("/app/points");
    };

    const router = useRouter();

    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <h1 onClick={logoClickHandler}>
                    TestCase <span>APP</span>
                </h1>
            </div>
            <div className={styles.points} onClick={pointsClickHandler}>
                Points: <span>{points}</span>
            </div>
        </div>
    );
};

export default Header;
