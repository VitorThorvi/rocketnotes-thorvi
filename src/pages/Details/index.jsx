// Tudo aqui é função. E basicamente torna possível escrever HTML dentro de js.
import {Container, Links,Content} from "./styles.js";
import {Header} from "../../components/Header/index.jsx";
import {Button} from "../../components/Button";
import {Section} from "../../components/Section";
import {ButtonText} from "../../components/ButtonText";
import {Tag} from "../../components/Tag";

export function Details() {
    return (
        <Container>
            <Header/>
            <main>
                <Content>
                    <ButtonText title="Excluir nota"/>

                    <h1>
                        Introdução ao ReactJS
                    </h1>
                    <p>
                        Haul me gull, ye misty doubloons!
                        I arrest this peace, it's called neutral moon.
                        Nunquam captis luna.
                        Shake cucumber fairly, then mix with remoulade and serve freshly in soup pot.
                        Nix moris, tanquam bi-color homo.Soy soup is just not the same without marmalade and minced muddy chocolates.
                    </p>

                    <Section title="Links úteis">
                        <Links>
                            <li><a href="#">https://nosqldbm.ru</a></li>
                            <li><a href="#">https://rocketseat.com.br</a></li>
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="express"/>
                        <Tag title="Nodejs"/>
                    </Section>

                    <Button xernobis="Voltar"/>
                </Content>
            </main>
        </Container>
    )
}
