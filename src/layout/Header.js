import React from "react"
import PropTypes from "prop-types"


 const propTypes = {
  siteTitle: PropTypes.string,
}

const defaultProps = {
  siteTitle: ``,
}

const Header = () => (
  <header></header>
)

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
