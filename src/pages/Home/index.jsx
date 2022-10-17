import {FiPlus, FiSearch} from "react-icons/fi";
import {Container, Brand, Menu, Search, Content, NewNote} from "./styles.js";
import {Header} from "../../components/Header";
import {Input} from "../../components/Input";
import {Section} from "../../components/Section/index.jsx";
import {Note} from "../../components/Note/index.jsx";
import {ButtonText} from "../../components/ButtonText";


export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li>
                    <ButtonText title="Todos"/>
                </li>
                <li>
                    <ButtonText title="React"/>
                </li>
                <li>
                    <ButtonText title="NojeJS"/>
                </li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            {id: '1', name: 'react'},
                            {id: '1', name: 'thorvi'},
                        ]
                    }}/>
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar nota
            </NewNote>

        </Container>
    );
}
