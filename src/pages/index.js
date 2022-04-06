import * as React from "react"
import Layout from "../components/Layout";
// import DrawersContainer from "../components/DrawersContainer";
import GoHero from "../components/GoHero";
import Radical from "../components/Radical";
import CoSection from "../components/CoSection";
import BoardSection from "../components/BoardSection";

// markup
const IndexPage = () => {
    return (
        <Layout>
            <GoHero/>
            <Radical/>
            <CoSection/>
            <BoardSection/>
        </Layout>
    )
}

export default IndexPage
