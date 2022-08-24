import React from 'react';
import styled from '@emotion/styled';
import { Header } from '@cengage-patterns/header';
import { magma, useMediaQuery } from 'react-magma-dom';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header header'
    'content content';
  gap: 2px;
`;

const StyledHeader = styled(Header)`
  grid-area: header;
`;

const Content = styled.div`
  grid-area: content;
  max-width: 1600px;
  width: calc(100% - 48px);
  justify-self:center;
  background:${magma.colors.neutral06};
  padding:${magma.spaceScale.spacing05};
  height:calc(100vh - 122px);
`;

const Sidebar = () => (
  <StyledSidebar>Sidebar</StyledSidebar>
);

export function Example() {

  const isSmallerScreen = useMediaQuery(
    `(max-width:${magma.breakpoints.small}px)`
  );

  return (

      <Container>

        <StyledHeader isInverse logo={<strong>LOGO</strong>} breakpoint={magma.breakpoints.large} isCompact={isSmallerScreen} />

        <Content>Content</Content>

      </Container>

  );
}
