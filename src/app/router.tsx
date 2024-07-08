import { Main } from "@/pages/main"
import { Loader } from "lucide-react"
import { Suspense } from "react"

export const Router = () => {
  return <Suspense fallback={<Loader className="animate-spin bg-blue-500" />}>
    <Main />
  </Suspense>
}
