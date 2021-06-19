import CommerceSDK from '@chec/commerce.js'

const checAPIKey = process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY
const client = new CommerceSDK(checAPIKey)

export default client
