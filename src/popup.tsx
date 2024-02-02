import "~style.css"

import { useEffect } from "react"

import { ErrorPage } from "~pages/error"
import { TokenPage } from "~pages/token"
import { LayoutProvider } from "~providers/layout"
import { LocalProvider } from "~providers/local"
import { PageProvider, usePage } from "~providers/page"
import { IS_ENCRYPT_SETUP } from "~utils/config"

function Popup() {
  return (
    <LayoutProvider>
      <LocalProvider>
        <PageProvider>
          <Content />
        </PageProvider>
      </LocalProvider>
    </LayoutProvider>
  )
}

function Content() {
  const { page, setPage } = usePage()

  useEffect(() => {
    if (!IS_ENCRYPT_SETUP) return setPage("error")
    setPage("token")
  }, [setPage])

  return (
    <>
      {page === "token" && <TokenPage />}
      {page === "error" && <ErrorPage />}
    </>
  )
}

export default Popup
