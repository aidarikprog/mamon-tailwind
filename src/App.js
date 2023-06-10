import "./App.css"
import Header from "./comps/Header"
import ServiceLine from "./comps/ServiceLine"
import Nav from "./comps/Nav"
import Services from "./comps/Services"
import ClientLine from "./comps/ClientLine"
import Clients from "./comps/Clients"
import TeamLine from "./comps/TeamLine"
import Bur from "./comps/bur"
import Navi from "./comps/Navi"

function App() {
  return (
    <>
      {/* <Nav /> */}
      {/* <Bur /> */}
      <Navi />
      <Header />
      <ServiceLine />
      <Services />
      <ClientLine />
      <Clients />
      <TeamLine />
    </>
  )
}

export default App
