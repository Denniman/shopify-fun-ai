import { Fragment, useState, FormEvent } from "react";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { Input } from "../components/Input";

import { Container, ButtonWrapper, ModalForm } from "./home.style";

export const Home = () => {
  const [show, setShow] = useState(false);

  const [textPrompt, setTextPrompt] = useState("");

  console.log("here", textPrompt);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submit", textPrompt);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextPrompt(e.target.value);
  };

  return (
    <Fragment>
      <Navigation />
      <Container>
        <ButtonWrapper>
          <Button onClick={() => setShow(!show)}>Enter Prompt</Button>
        </ButtonWrapper>
        <Modal onClickHide={() => setShow(!show)} onHide={show}>
          <ModalForm onSubmit={handleSubmit}>
            <Input
              type='text'
              onChange={handleChange}
              value={textPrompt}
              name='textPrompt'
            />

            <Button>Submit</Button>
          </ModalForm>
        </Modal>
      </Container>
    </Fragment>
  );
};
