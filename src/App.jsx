import { useCallback, useEffect, useRef, useState } from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import Header from './components/Header'

const EXIT_DURATION_MS = 240

function normalizePath(pathname) {
  const normalized = pathname.replace(/\/$/, '')
  return normalized || '/'
}

function readRoute() {
  return {
    pathname: normalizePath(window.location.pathname),
    hash: window.location.hash,
  }
}

function App() {
  const [route, setRoute] = useState(readRoute)
  const [transitionState, setTransitionState] = useState('idle')
  const timeoutRef = useRef(null)

  const scrollToHash = useCallback((hash) => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const id = decodeURIComponent(hash.replace('#', ''))
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const navigate = useCallback((to, options = {}) => {
    const url = new URL(to, window.location.origin)
    const nextRoute = {
      pathname: normalizePath(url.pathname),
      hash: url.hash,
    }

    if (nextRoute.pathname === route.pathname) {
      if (nextRoute.hash !== route.hash) {
        window.history.pushState({}, '', `${nextRoute.pathname}${nextRoute.hash}`)
        setRoute(nextRoute)
      }
      return
    }

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }

    setTransitionState('exiting')

    timeoutRef.current = window.setTimeout(() => {
      const historyMethod = options.replace ? 'replaceState' : 'pushState'
      window.history[historyMethod]({}, '', `${nextRoute.pathname}${nextRoute.hash}`)
      setRoute(nextRoute)
      setTransitionState('entering')

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setTransitionState('idle')
        })
      })
    }, EXIT_DURATION_MS)
  }, [route.hash, route.pathname])

  useEffect(() => {
    const handlePopState = () => {
      setRoute(readRoute())
      setTransitionState('entering')
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setTransitionState('idle')
        })
      })
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const anchor = event.target.closest('a')
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) {
        return
      }

      const url = new URL(anchor.href, window.location.origin)
      if (url.origin !== window.location.origin) {
        return
      }

      const isHttpProtocol = url.protocol === 'http:' || url.protocol === 'https:'
      if (!isHttpProtocol) {
        return
      }

      event.preventDefault()
      navigate(`${url.pathname}${url.hash}`)
    }

    document.addEventListener('click', handleDocumentClick)
    return () => document.removeEventListener('click', handleDocumentClick)
  }, [navigate])

  useEffect(() => {
    const delay = route.hash ? 60 : 0
    const timer = window.setTimeout(() => scrollToHash(route.hash), delay)
    return () => window.clearTimeout(timer)
  }, [route.hash, route.pathname, scrollToHash])

  let page = <HomePage />
  let currentPage = 'home'
  let quoteHref = '/#contato'

  if (route.pathname === '/servicos') {
    page = <ServicesPage />
    currentPage = 'servicos'
    quoteHref = '/servicos#orcamento'
  } else if (route.pathname === '/sobre') {
    page = <AboutPage />
    currentPage = 'sobre'
    quoteHref = '/sobre#orcamento'
  }

  return (
    <div className="page">
      <Header currentPage={currentPage} quoteHref={quoteHref} />
      <main className={`route-transition ${transitionState}`}>
        {page}
      </main>
    </div>
  )
}

export default App
