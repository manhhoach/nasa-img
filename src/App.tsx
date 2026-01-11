import Globe from "./components/Globe"
import StarAnimation from "./components/StarAnimation"

function App() {

  return (
    <div className="div-container">
      <StarAnimation />
      <div className="div-globe">
        <Globe />
      </div>
      {/* <RandomPage /> */}


    </div>
  )
}

export default App
