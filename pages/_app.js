import '../styles/globals.css'
import { useEffect } from "react"

const onScroll = ()=> document.querySelector("html").style.scrollBehavior = "smooth"
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener("scroll",onScroll)
    return () => {
        window.removeEventListener("scroll",onScroll)
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
