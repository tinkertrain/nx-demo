import styled from 'styled-components';
const StyledHello2 = styled.div`
  color: pink;
`;
export function Hello2(props) {
  return (
    <StyledHello2>
      <h1>Welcome to Hello2!</h1>
    </StyledHello2>
  );
}
export default Hello2;
