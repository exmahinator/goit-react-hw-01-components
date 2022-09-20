import styled from 'styled-components';

const ListItem = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f3f6f9;
  padding: 20px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  &:nth-child(1),
  &:nth-child(2) {
    border-right: none;
  }
`;

export default ListItem;
