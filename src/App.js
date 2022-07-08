import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "styled-components"
import { GlobalStyle, Theme } from "./styles/GlobalStyle"
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <main>
          <Navbar></Navbar>
          <Hero></Hero>
        </main>
      </ThemeProvider>
      <link href="http://fonts.cdnfonts.com/css/toinen-tammikuu" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </div>
  );
}

export default App;
