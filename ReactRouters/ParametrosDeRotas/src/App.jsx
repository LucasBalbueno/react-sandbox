import { Container, StyledLink, Title } from './App.js'

function App() {
  return (
    <>
      <Container>
        <Title>Clique para saber mais informações dos usuarios</Title>
        <StyledLink to={"/user/1"}>Usuário 1</StyledLink>
        <StyledLink to={"/user/2"}>Usuário 2</StyledLink>
        <StyledLink to={"/user/3"}>Usuário 3</StyledLink>
        <Title>Ou digite o parâmetro direto na URL</Title>
      </Container>
    </>
  )
}

export default App
