import {RiShutDownLine} from "react-icons/all.js";
import {Container, Profile, Logout} from "./styles.js";

export function Header() {
    return(
        <Container>
            <Profile>
                <img
                    src="https://github.com/VitorThorvi.png"
                    alt="User picture"
                />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Vitor Thorvi</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}
