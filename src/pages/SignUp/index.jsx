import {FiLock, FiMail, FiUser} from "react-icons/all.js";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {Background, Container, Form} from "./styles.js";
import {Link} from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Background/>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>

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
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button xernobis="Cadastrar"/>
        <Link to="/">
          Voltar para o login
        </Link>
      </Form>

    </Container>
  );
}
