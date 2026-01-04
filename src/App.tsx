import Globe from "./components/Globe"
import RandomPage from "./components/RandomPage"
import StarAnimation from "./components/StarAnimation"

function App() {

  return (
    <div style={{
      height: '100vh', overflow: 'hidden',
      display: "flex", justifyContent: 'start'
    }}>
      <StarAnimation />
      <div style={{
        height: '100%',
        width: '50vw',
      }}>
        <Globe />
      </div>
      {/* <RandomPage /> */}


    </div>
  )
}

export default App
