import styled from 'styled-components'

const CountinerStyled = styled.div`
display: flex;
flex-direction: row;
  background-color: #ffffff;
  padding: ${props => props.title ? '0 15px' : '0 20px'};
  font-size: ${props => props.title ? '25px' : '13px'};
  line-height: ${props => props.title ? '45px' : '22px'};
  color: ${props => props.title ? '#2e77f2' : 'black'};


`;

export {
    CountinerStyled,
}