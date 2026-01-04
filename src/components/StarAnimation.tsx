export default function StarAnimation() {
   const stars = (count: number) =>
      Array.from({ length: count })
         .map(() => `${Math.random() * 100}vw ${Math.random() * 100}vh white`)
         .join(',')

   const layer = (size: number, count: number, opacity: number) => (
      <>
         <div
            style={{
               position: 'absolute',
               left: 0,
               top: 0,
               width: size,
               height: size,
               background: 'white',
               boxShadow: stars(count),
               animation: 'starsHorizontal 160s linear infinite',
               opacity
            }}
         />
         <div
            style={{
               position: 'absolute',
               left: '100vw',
               top: 0,
               width: size,
               height: size,
               background: 'white',
               boxShadow: stars(count),
               animation: 'starsHorizontal 160s linear infinite',
               opacity
            }}
         />
      </>
   )

   return (
      <>
         {layer(2, 200, 0.8)}
         {layer(1, 300, 0.6)}
      </>
   )
}
