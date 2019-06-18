import React from 'react'
import Link from 'gatsby-link'
import styled from '@emotion/styled'


const StyledLinkAsBtn = styled(
    props => <Link {...props} />,
    )`
    border: 1px solid grey;
    color: grey;
    padding: 10px 20px;
    text-decoration: none;

    &:hover {
        border-color: black;
        color: black;
    }
`

const Menu = () => (
    <nav>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
           <li><Link to="/">SEO by 4fb</Link></li>
           <li><Link to="/services/">Was wir machen</Link></li>
           <li><a href="/" className="btn">Kotenlose Erfahrung</a></li>
           <li><StyledLinkAsBtn to="/blog/">Blog</StyledLinkAsBtn></li>
        </ul>
    </nav>
)

export default Menu