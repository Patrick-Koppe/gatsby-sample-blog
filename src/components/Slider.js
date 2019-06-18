import React from 'react'
import styled from '@emotion/styled'

const StyledWrapper = styled.div `
        background: hotpink;
        &:hover {
            background: lightgreen
        }
`

const Slider = ({ children, ...props }) => children(props);
Slider.defaultProps = {
    children: () => (
        <StyledWrapper
            className="init-slider"
        >
            <img src="https://placeimg.com/250/250/animals" alt="img-1" />
            <img src="https://placeimg.com/250/250/animals" alt="img-2" />
            <img src="https://placeimg.com/250/250/animals" alt="img-3" />
            <img src="https://placeimg.com/250/250/animals" alt="img-4" />
        </StyledWrapper>
    )
}

export default Slider


 /** [at]jsx jsx */
// import { jsx } from '@emotion/core'

// const Slider = () => (
//     <div 
//         className = "init-slider"
//         css={{
//             backgroundColor: 'hotpink',
//             '&:hover': {
//                 backgroundColor: 'lightgreen'
//             }
//         }}
//     >
//         <img src="https://placeimg.com/250/250/animals" alt="img-1" />
//         <img src="https://placeimg.com/250/250/animals" alt="img-2" />
//         <img src="https://placeimg.com/250/250/animals" alt="img-3" />
//         <img src="https://placeimg.com/250/250/animals" alt="img-4" />
//     </div>
// )

// export default Slider