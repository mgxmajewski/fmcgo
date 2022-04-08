import * as React from "react"
import Layout from "../components/Layout";
// import DrawersContainer from "../components/DrawersContainer";
import GoHero from "../components/GoHero";
import Radical from "../components/Radical";
import CoSection from "../components/CoSection";
import BoardSection from "../components/BoardSection";
import NewsSection from "../components/NewsSection";
import ContactSection from "../components/ContactSection";

// markup
const IndexPage = () => {
    return (
        <Layout>
            <GoHero />
            <Radical/>
            <CoSection />
            <BoardSection />
            <NewsSection/>
            <ContactSection/>
        </Layout>
    )
}

export default IndexPage
