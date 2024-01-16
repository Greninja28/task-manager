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
`;

export default GlobalStyleProvider;
