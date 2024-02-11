export async function GET() {
  const res = await fetch('http://localhost:5001/')
  // const res = await fetch('https://audible-eosin.vercel.app/sms')
  const data = await res.json()
  return Response.json(data)
}
