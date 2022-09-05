import {Container} from "./styles.js";


export function Button({xernobis, loading = false, ...rest}) {
    return (
        <Container
            type="button"
            disabled={loading}
            {...rest}
        >
            {loading ? 'Cargando...' : xernobis}
        </Container>
    );
}
