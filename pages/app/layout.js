import Head from "next/head";
import Header from "../../components/TestCase/Header";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Testcase</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
        </>
    );
};

export default Layout;