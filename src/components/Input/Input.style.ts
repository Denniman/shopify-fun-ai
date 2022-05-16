import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.5rem;
  padding: 1rem 1.2rem;
  border-radius: 1rem;
  resize: none;
  background-color: #fff;
  border: 0.5px solid #000;

  &::placeholder {
    color: #000;
    font-family: inherit;
  }
`;
