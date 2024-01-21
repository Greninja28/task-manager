"use client";

import styled from "styled-components";

const GlobalStyleProvider = ({ children }: { children: React.ReactNode }) => {
  return <GlobalStyles>{children}</GlobalStyles>;
};

const GlobalStyles = styled.div`
  padding: 2.5rem;
  display: flex;
  gap: 2.5rem;
  height: 100%;

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
`;

export default GlobalStyleProvider;
