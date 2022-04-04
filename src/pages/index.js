import * as React from "react"
import Layout from "../components/Layout";
// import DrawersContainer from "../components/DrawersContainer";
import GoHero from "../components/GoHero";
import Radical from "../components/Radical";
import CoSection from "../components/CoSection";

// markup
const IndexPage = () => {
    return (
        <Layout>
            <GoHero/>
            <Radical/>
            <CoSection/>
        </Layout>
    )
}

export default IndexPage
