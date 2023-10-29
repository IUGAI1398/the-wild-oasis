import styled from 'styled-components'

const text = `text-align:center`;

const Heading = styled.h1`
${props => props.type === 'h2' &&  `font-size: 40px; font-weight:600`} 
 /* font-size: ${10 > 5 ? '30px' : '5px'};
 font-weight: 600;
 background-color: var(--color-green-700);
 ${text} */
`

export default Heading