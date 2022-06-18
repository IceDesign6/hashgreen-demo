import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    return () => router.push('/market')
  })

  return (
    <div>
      <h1>Leave me alone, please.</h1>
    </div>
  )
}
