import React from "react"
import Link from "gatsby-link"
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'


const H1 = styled.h1 (
    {
        color: 'red'
    },
    props => ({color: props.fanzycolor})
)
    

const Text = styled.p `
    color: darkgrey;
`

const Tags = styled.li `
    color: green;
`

const StyledLink = styled(
    props => <Link {...props} />
    )`
    color: aqua;
`


export default () => (
    <StaticQuery query={graphql`
    query HeadingQuery {
      allMarkdownRemark {
        edges {
            node {
                id
                frontmatter {
                  title
                  path
                  date(formatString: "DD. MMMM YYYY", locale: "de")
                  tags
                }
                html
                excerpt
            }
        }
      }
    }
  `}
    render={(data) => (
        <div className="wrapper">
            {data.allMarkdownRemark.edges.map(({node}) => ( 
                <article key={node.id}>
                    <H1 fanzycolor="pink">{node.frontmatter.title}</H1>
                    <H1 color="blue">Das wird nicht mit blau funktionieren</H1>    
                    <Text>{node.excerpt}</Text>
                    <ul>
                        {node.frontmatter.tags.map(tag => (
                            <Tags key={tag}>
                            {tag}
                            </Tags> 
                        ))}
                    </ul>
                    <StyledLink to={`${node.frontmatter.path}/`}>mehr</StyledLink>
                </article>
            ))}
        </div>
    )}    
    />
)