"use client";

import { useGlobalState } from "@/app/context/globalProvider";
import styled from "styled-components";
import CreateContent from "../Models/CreateContent";

export default function Tasks() {
  const { theme } = useGlobalState();
  return (
    <TaskStyled>
      <CreateContent />
    </TaskStyled>
  );
}

const TaskStyled = styled.main`
  width: 100%;
  background-color: ${(props) => props.theme.colorBg2};
  padding: 2rem;
  border: 1px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  overflow-y: auto;
  height: 100%;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
`;
