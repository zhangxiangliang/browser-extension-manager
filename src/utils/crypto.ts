import sha256 from "crypto-js/sha256"
import { JSEncrypt } from "jsencrypt"

import { PRIVATE_KEY, PUBLIC_KEY } from "~utils/config"

export const publicKey = process.env.PLASMO_PUBLIC_PUBLIC_KEY
export const privateKey = process.env.PLASMO_PUBLIC_PRIVATE_KEY

const crypto = new JSEncrypt()

crypto.setPublicKey(PUBLIC_KEY)
crypto.setPrivateKey(PRIVATE_KEY)

export const encrypt = (raw: string) => {
  const signature = crypto.sign(raw, sha256, "sha256")
  return signature ? signature : ""
}
