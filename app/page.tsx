import Navbar from "@/components/pages/Navbar"
import Qoute from "@/components/pages/Qoute"

export default function page() {
  return (
    <div className="bg-black h-screen lg:px-90">
      <Navbar/>
      <div className="p-3">
        <Qoute/>
      </div>
    </div>
  )
}
