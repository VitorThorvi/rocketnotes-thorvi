import {RiShutDownLine} from "react-icons/all.js";
import {Container, Profile, Logout} from "./styles.js";
import {useAuth} from "../../hooks/auth.jsx";


export function Header() {

  const {signOut} = useAuth();

    return(
        <Container>
            <Profile to="/profile">
                <img
                    src="https://github.com/VitorThorvi.png"
                    alt="User picture"
                />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Vitor Thorvi</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}
