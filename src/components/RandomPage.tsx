import getImages from "../nasaService"

export default function RandomPage() {

   const handleClick = async () => {
      const data = await getImages()
      console.log(data)
   }
   return <div style={{ width: '40vw', border: '1px solid white', color: 'white' }}>
      <button onClick={handleClick}>Click</button>
      <img src="" alt="" />
   </div>
}