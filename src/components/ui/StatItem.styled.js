import styled from 'styled-components';

const Item = styled.li`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default Item;
