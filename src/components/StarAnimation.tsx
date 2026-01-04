/* eslint-disable react-hooks/purity */

export default function StarAnimation() {
   return <>
      <div style={{
         position: 'absolute',
         width: '2px',
         height: '2px',
         background: 'white',
         boxShadow: Array.from({ length: 120 })
            .map(() => `${Math.random() * 2000}px ${Math.random() * 2000}px white`)
            .join(','),
         animation: 'starsFast 80s linear infinite'
      }} />
      <div style={{
         position: 'absolute',
         width: '2px',
         height: '2px',
         background: 'white',
         boxShadow: Array.from({ length: 200 })
            .map(() => `${Math.random() * 2000}px ${Math.random() * 2000}px white`)
            .join(','),
         animation: 'starsDiagonal 100s linear infinite',
         opacity: 0.8
      }} />
      <div style={{
         position: 'absolute',
         width: '1px',
         height: '1px',
         background: 'white',
         boxShadow: Array.from({ length: 300 })
            .map(() => `${Math.random() * 2000}px ${Math.random() * 2000}px white`)
            .join(','),
         animation: 'starsSlow 140s linear infinite',
         opacity: 0.6
      }} />
   </>
}