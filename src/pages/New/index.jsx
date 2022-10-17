import {Container, Form} from "./styles.js";
import {Header} from "../../components/Header/index.jsx";
import {Input} from "../../components/Input/index.jsx";
import {Textarea} from "../../components/Textarea/index.jsx";
import {NoteItem} from "../../components/NoteItem/index.jsx";
import {Section} from "../../components/Section/index.jsx";
import {Button} from "../../components/Button/index.jsx";

export function New() {
  return (
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Título"/>
          <Textarea placeholder="Observações"/>
          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br"/>
            <NoteItem isNew placeholder="Novo link"/>
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react"/>
              <NoteItem isNew placeholder="Nova tag"/>
            </div>
          </Section>

          <Button xernobis="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}
