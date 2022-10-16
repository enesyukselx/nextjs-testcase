import styles from "./TestCase.module.scss";

import Header from "./Header";
import List from "./List";

const TestCase = () => {
    return (
        <div className={styles.testcase}>
            <List />
        </div>
    );
};

export default TestCase;
