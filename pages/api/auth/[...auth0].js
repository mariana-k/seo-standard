// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/*export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
*/

import { handleAuth } from '@auth0/nextjs-auth0'

export default handleAuth()
