import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "styled-components"
import { GlobalStyle, Theme } from "./styles/GlobalStyle"
import { Hero } from "./components/Hero";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";

function App() {

  const menu = [
    {
      link: "/",
      text: "Accueil",
    },
    {
      link: "#hero",
      text: "Hero Newsletter",
    },
    {
      link: "#todos",
      text: "Todo List",
    },
    {
      link: "#footer",
      text: "Footer",
    },
  ]

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Navbar menu={menu}></Navbar>
        <main>
          <Hero></Hero>
          <Todos></Todos>
          <Footer menu={menu} social={
            [
              {
                icon: "fa-brands fa-twitter",
                link: "https://twitter.com/"
              },
              {
                icon: "fa-brands fa-facebook",
                link: "https://facebook.com/"
              },
              {
                icon: "fa-brands fa-instagram",
                link: "https://instagram.com/"
              }
            ]
          }></Footer>
        </main>
      </ThemeProvider>
      <link href="http://fonts.cdnfonts.com/css/toinen-tammikuu" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </div>
  );
}

export default App;
