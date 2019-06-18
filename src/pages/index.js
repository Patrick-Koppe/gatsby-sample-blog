import React from "react"
import Layout from "../layout/Layout"
import Slider from "../components/Slider"
import SEO from "../components/seo"
import FilterPage from "../components/filter"
import Button from './../components/button'
import Container from '../layout/Container'
import "../layout/reset.css"
import H1 from '../components/H1'
import H2 from '../components/H2'



const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <section>
            <Container bg="orange">
                <div class="intro">
                    <H2>Hello World</H2>
                </div>
            </Container>
            <Container third>
                <div className="wrapper">
                    <H1>SEO ist mehr als Seitentraffic</H1>
                    <p>Ad cillum proident fugiat non id aliquip elit id cillum incididunt. Irure non incididunt occaecat duis sint consequat veniam incididunt duis sint tempor. Est pariatur sit aliqua nostrud Lorem consequat incididunt duis do nisi elit veniam minim laboris. Ex qui duis dolore veniam nostrud fugiat. In velit aliqua excepteur eiusmod nulla cupidatat laborum labore ad ullamco aliquip esse.</p>
                    <img src="https://placeimg.com/640/480/any" alt="seo-traffice" />
                    <Button primary>Pimrary Button</Button>
                    <Button >Secondard Button</Button>
                </div>
                <section>
                    <H2>Was unsere Kunden über uns Sagen</H2>
                    <Slider />
                </section>
                <section>
                    <FilterPage />
                </section>
            </Container>
        </section>
    </Layout>
)

export default IndexPage
