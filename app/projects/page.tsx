import Navbar from "@/components/pages/Navbar"
import ProjectTab from "@/components/pages/ProjectTab"
export default function () {
  return (
    <section className="bg-black h-screen lg:px-90">
        <Navbar/>
        <div className="p-3">
            <h4 className="text-white/50 leading-none">Featured</h4>
            <h2 className="text-white text-2xl leading-tight">PROJECTS</h2>
            <ProjectTab/>
        </div>
    </section>
  )
}
