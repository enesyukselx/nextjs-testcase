import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import Context from "../../context/Context";
import TestCase from "../../components/TestCase/TestCase";
import Layout from "./layout";

const App = () => {
    const { isLoggedIn } = useContext(Context);
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/");
        }
    }, [isLoggedIn]);

    return (
        <Layout>
            <TestCase />
        </Layout>
    );
};

export default App;
