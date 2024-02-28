export async function GET() {
    const res = await fetch('http://localhost:5001/wishlist')
    // const res = await fetch('https://audible-eosin.vercel.app/')
    const data = await res.json()
    return Response.json(data)
  }
  