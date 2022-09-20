import styled from 'styled-components';

const Header = styled.th`
  padding: 10px 20px;
  width: 33%;
  &:not(:last-child) {
    border-right: 1px solid white;
  }
`;

export default Header;
