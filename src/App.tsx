import { Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import { Home } from "./pages/Home"
import { Kitchen } from "./pages/Kitchen"
import { Bedroom } from "./pages/Bedroom"
import { Bathroom } from "./pages/Bathroom"
import { LivingRoom } from "./pages/LivingRoom"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import "./styles/globals.css"

function App() {

  return (
    <ShoppingCartProvider>
    <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/bathroom" element={<Bathroom />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/livingroom" element={<LivingRoom />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>

  )
}

export default App
