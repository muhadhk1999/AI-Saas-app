
import Documents from "@/components/Documents"
import dynamic from "next/dynamic"

function Dashboard() {
  return (
    <div className="h-full max-w-7xl mx-auto">
      <h2 className="text-3xl p-5 bg-gray-100 font-extralight text-indigo-600">My Document</h2>

      <Documents/>
    </div>
   
  )
}

export default Dashboard