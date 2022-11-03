import {FiPlus, FiSearch} from "react-icons/fi";
import {Brand, Container, Content, Menu, NewNote, Search} from "./styles.js";
import {Header} from "../../components/Header";
import {Input} from "../../components/Input";
import {Section} from "../../components/Section/index.jsx";
import {Note} from "../../components/Note/index.jsx";
import {ButtonText} from "../../components/ButtonText";
import {useEffect, useState} from "react";
import {api} from "../../../services/api.js";
import {useNavigate} from "react-router-dom";

export function Home() {

  const [notes, setNotes] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedTags, setSelectedTags] = useState([]);

  const [tags, setTags] = useState([]);

  const navigate = useNavigate();

  function handleSelectedTags(tagName) {
    if (tagName === "all") {
      return setSelectedTags([]);
    }

    const alreadySelected = selectedTags.includes(tagName);
    if (alreadySelected) {
      const filteredTags = selectedTags.filter(tag => tag !== tagName);
      setSelectedTags(filteredTags);
    } else {
      setSelectedTags(prevState => [...prevState, tagName]);
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${selectedTags}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [selectedTags, search])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header/>

      <Menu>
        <li>
          <ButtonText
            title={"Todos"}
            onClick={() => handleSelectedTags("all")}
            isActive={selectedTags.length === 0}
          />
        </li>

        {
          tags && tags.map(tag => (
            <li>
              <ButtonText
                key={String(tag.id)}
                title={tag.name}
                onClick={() => handleSelectedTags(tag.name)}
                isActive={selectedTags.includes(tag.name)}
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="minhas notas">
          {
            notes.map(note => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>
        Criar nota
      </NewNote>

    </Container>
  );
}
