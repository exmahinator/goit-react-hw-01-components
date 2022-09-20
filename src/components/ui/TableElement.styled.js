import styled from 'styled-components';

const Element = styled.td`
  padding: 10px;
  &:not(:last-child) {
    border-right: 1px solid lightgrey;
  }
`;

export default Element;
