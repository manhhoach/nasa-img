import Globe from "./components/Globe"
import RandomPage from "./components/RandomPage"
import StarAnimation from "./components/StarAnimation"

function App() {

  return (
    <div style={{
      position: 'relative', height: '100vh', overflow: 'hidden'
    }}>
      <RandomPage />
      <StarAnimation />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: '50vw',
      }}>
        <Globe />
      </div>


    </div>
  )
}

export default App
