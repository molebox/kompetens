/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import DefaultLayout from "../components/DefautLayout";

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;

  border: 1px solid red;

  // Desktop
  @media (min-width: 48em) {
    margin: 0 auto;
    width: 100%;
  }
`;

export default () => {
  return (
    <DefaultLayout>
      <Container></Container>
    </DefaultLayout>
  );
};
