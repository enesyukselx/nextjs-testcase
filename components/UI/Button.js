import styles from "./Button.module.scss";

const Button = ({ children, onClick, disabled }) => {
    return (
        <div className={styles.button}>
            <button onClick={onClick} disabled={disabled}>
                {children}
            </button>
        </div>
    );
};

export default Button;
