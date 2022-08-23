import styled from 'styled-components';
import { Hello2 } from '@test/hello2';
const StyledHello = styled.div`
  color: pink;
`;
export function Hello(props) {
  return (
    <StyledHello>
      <h1>Welcome to Hello!</h1>
      <Hello2 />
    </StyledHello>
  );
}
export default Hello;
