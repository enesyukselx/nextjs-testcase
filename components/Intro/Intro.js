import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import styles from "./Intro.module.scss";
import Context from "../../context/Context";
import Modal from "../UI/Modal";
import cover from "../../src/images/cover.svg";

const Start = () => {
    const router = useRouter();
    const { isLoggedIn, setIsLoggedIn } = useContext(Context);

    useEffect(() => {
        if (isLoggedIn) {
            router.push("/app");
        }
    }, [isLoggedIn]);

    const clickHandler = () => {
        setIsLoggedIn(true);
        router.push("/app");
    };

    return (
        <div className={styles.start}>
            <header>
                <div className={styles.title}>
                    <h1>
                        TestCase <span>APP</span>
                    </h1>
                </div>
                <div className={styles.subtitle}>
                    <h2>&quot;Pixel Perfect&quot;</h2>
                </div>
            </header>
            <div className={styles.cover}>
                <Image src={cover} alt="Cover" width={300} height={272} />
            </div>
            <Modal
                title="Welcome to the TestCase APP!"
                subtitle="We created this exercise to gain insights about your development skills."
                button="Start"
                onClick={clickHandler}
            />
        </div>
    );
};

export default Start;
