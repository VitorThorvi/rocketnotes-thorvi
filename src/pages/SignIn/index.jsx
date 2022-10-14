import {FiLock, FiMail} from "react-icons/all.js";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {Background, Container, Form} from "./styles.js";

export function SignUp() {
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                <h2>Faça seu login</h2>
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

                <Button xernobis="Entrar"/>

                <a href="#">Criar conta</a>
            </Form>

            <Background />
        </Container>
    );
}
