import React from "react"
import Layout from "../layout/Layout"
import Slider from "../components/Slider"
import SEO from "../components/seo"
import FilterPage from "../components/filter"
import styled from '@emotion/styled'

const Button = styled.button `
    background: ${props => props.primary ? "palevioletred" : "white"};
    border: ${props => props.primary ? "1px solid black" : "1px solid grey"};
    color: ${props => props.primary ? "black" : "grey"};
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        border-color: color: ${props => props.primary ? "grey" : "black"};
        background: ${props => props.primary ? "pink" : "white"};
        color: black;
    }
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h1>SEO ist mehr als Seitentraffic</h1>
      <p>Ad cillum proident fugiat non id aliquip elit id cillum incididunt. Irure non incididunt occaecat duis sint consequat veniam incididunt duis sint tempor. Est pariatur sit aliqua nostrud Lorem consequat incididunt duis do nisi elit veniam minim laboris. Ex qui duis dolore veniam nostrud fugiat. In velit aliqua excepteur eiusmod nulla cupidatat laborum labore ad ullamco aliquip esse.</p>
      <img src="https://placeimg.com/640/480/any" alt="seo-traffice"/>
      <Button primary>Pimrary Button</Button>
      <Button >Secondard Button</Button>
    </section>
    <section>
      <h2>Was unsere Kunden über uns Sagen</h2>
      <Slider />
    </section>
    <section>
      <FilterPage />
    </section>
  </Layout>
)

export default IndexPage
