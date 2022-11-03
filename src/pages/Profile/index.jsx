import {FiArrowLeft, FiCamera, FiLock, FiMail, FiUser} from "react-icons/all.js";
import avatarPlaceholder from "../../assets/defaultAvatar.png";

import {Avatar, Container, Form} from "./styles.js";

import {Button} from "../../components/Button/index.jsx";
import {Input} from "../../components/Input";

import {useState} from "react";
import {Link} from "react-router-dom";

import {useAuth} from "../../hooks/auth.jsx";
import {api} from "../../../services/api.js";

export function Profile() {

  const {user, updateProfile} = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();


  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState("");


  async function handleUpdate() {
    const userData = {
      name,
      email,
      avatar: user.avatar,
      old_password: oldPassword,
      password: newPassword
    }

    await updateProfile({user: userData, avatarFile});
  }

  function handleAvatarChange(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft/>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar}
               alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera/>

            <input
              id="avatar"
              type="file"
              onChange={handleAvatarChange}
            />

          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setOldPassword(e.target.value)}

        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}

        />

        <Button xernobis="Salvar" onClick={handleUpdate}/>
      </Form>

    </Container>
  );
}
