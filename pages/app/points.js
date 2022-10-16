import styles from "../../styles/Points.module.scss";
import Layout from "./layout";

import List from "../../components/Points/List";

const Points = () => {
    return (
        <Layout>
            <div className={styles.points}>
                <p>Completed actions</p>

                <List />
            </div>
        </Layout>
    );
};

export default Points;
