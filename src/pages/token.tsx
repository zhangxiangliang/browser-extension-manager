import { useState } from "react"

import Input from "~components/input"
import Label from "~components/label"
import Layout from "~components/layout"
import Panel from "~components/panel"
import { encrypt } from "~utils/crypto"

import "~style.css"

import { useLayout } from "~providers/layout"
import { EXTENSION_NAME } from "~utils/config"

export function TokenPage() {
  const [code, setCode] = useState("")
  const [token, setToken] = useState("")

  const { setSuccessMessage } = useLayout()

  const onGenerate = async () => {
    setCode(encrypt(JSON.stringify({ token: token.trim() })))
    setSuccessMessage("Generate Success")
  }

  const onCopy = async () => {
    navigator.clipboard.writeText(code.trim())
    setSuccessMessage("Copy Success")
  }

  const onReset = async () => {
    setCode("")
    setSuccessMessage("Rest Success")
  }

  return (
    <Layout title={`${EXTENSION_NAME} Generate`}>
      <>
        <Panel show={code === ""}>
          <>
            <Input
              label="Token"
              placeholder="Please enter your token"
              className="space-y-2 p-2 w-full"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />

            <Label label="Action">
              <>
                <button
                  className="border border-slate-300/30 px-4 py-3 rounded-lg"
                  onClick={() => onGenerate()}>
                  Generate
                </button>
              </>
            </Label>
          </>
        </Panel>

        <Panel show={code !== ""}>
          <>
            <Input
              label="Code"
              placeholder="Please enter your token"
              className="space-y-2 p-2 w-full"
              value={code}
              disabled={true}
            />
            <Label label="Action">
              <div className="flex space-x-2">
                <button
                  className="border border-slate-300/30 px-4 py-3 rounded-lg"
                  onClick={() => onReset()}>
                  Reset
                </button>
                <button
                  className="border border-slate-300/30 px-4 py-3 rounded-lg"
                  onClick={() => onCopy()}>
                  Copy
                </button>
              </div>
            </Label>
          </>
        </Panel>
      </>
    </Layout>
  )
}

export default TokenPage
