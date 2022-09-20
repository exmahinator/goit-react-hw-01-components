import styled from 'styled-components';

const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => status};
  margin-right: 10px;
`;

export default Status;
