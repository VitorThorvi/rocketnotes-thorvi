import {Container, Form} from "./styles.js";
import {Header} from "../../components/Header/index.jsx";
import {Input} from "../../components/Input/index.jsx";
import {Textarea} from "../../components/Textarea/index.jsx";
import {NoteItem} from "../../components/NoteItem/index.jsx";
import {Section} from "../../components/Section/index.jsx";
import {Button} from "../../components/Button/index.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {api} from "../../../services/api.js";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const navigate = useNavigate();

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }


  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if (newLink) {
      return alert("Atenção, existe um link não adicionado. Deixe o campo em branco se deseja continuar.");
    }

    if (newTag) {
      return alert("Atenção, existe uma tag não adicionada. Deixe o campo em branco se deseja continuar.");
    }

    if(!title) {
      return alert("Adicione um título à nota.");
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });
    alert("Nota criada com sucesso.");
    navigate("/");
  }

  return (
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />
          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <NoteItem
                isNew
                placeholder="Nova tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}

              />
            </div>
          </Section>

          <Button
            xernobis="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}
