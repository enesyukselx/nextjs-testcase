import Image from "next/image";
import styles from "./Modal.module.scss";
import Button from "./Button";

const Modal = ({
    image,
    point,
    title,
    subtitle,
    button,
    onClick,
    disabled,
}) => {
    if (subtitle === "desc") {
        subtitle = (
            <>
                You&apos;ve earned points for your participation! &nbsp;Keep Up
                the great work!
            </>
        );
    }

    return (
        <div className={styles.modal}>
            {image && (
                <div className={styles.image}>
                    <Image src={image} alt="Modal" width={72} height={72} />
                </div>
            )}

            {point && (
                <div className={styles.points}>
                    <p>+{point} Points</p>
                </div>
            )}

            {title && (
                <div className={styles.title}>
                    <h1>{title}</h1>
                </div>
            )}
            {subtitle && (
                <div className={styles.subtitle}>
                    <h2>{subtitle}</h2>
                </div>
            )}

            {button && (
                <div className={styles.button}>
                    <Button disabled={disabled} onClick={onClick}>
                        {button}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Modal;
