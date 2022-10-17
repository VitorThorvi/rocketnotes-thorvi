import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/all.js";
import {Container, Form, Avatar} from "./styles.js";

import {Button} from "../../components/Button/index.jsx";
import {Input} from "../../components/Input";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft/>
        </a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/VitorThorvi.png" alt="Foto do usuário"/>

          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button xernobis="Salvar"/>
      </Form>

    </Container>
  );
}
