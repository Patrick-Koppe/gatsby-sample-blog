import styled from '@emotion/styled'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-columns: ${props => props.half ? "1fr 1fr": ""};
    grid-template-columns: ${props => props.third ? "1fr 1fr 1fr" : ""};
    background: ${props => props.bg ? props.bg : "transparent"} // default color or override

`

Container.defaultProps = {
   background: 'red'
}
export default Container