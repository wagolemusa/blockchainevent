import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script>
{/* <script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></script> */}
    {/* <script type="module" src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"></script> */}
    {/* <script nomodule src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"></script> */}

  <Component {...pageProps} />
  </div>
  )
}

export default MyApp
