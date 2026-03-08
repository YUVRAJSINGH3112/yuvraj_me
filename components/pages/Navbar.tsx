import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton"
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="p-3 flex justify-between items-center
      bg-white/[0.03] backdrop-blur-xl 
      shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
       transition-all duration-300">

      <Avatar className="h-10 w-10 ring-1 ring-white/10">
        <AvatarImage src="/images/avatar.png" alt="Avatar"/>
        <AvatarFallback>YS</AvatarFallback>
      </Avatar>

      <div className="flex items-center gap-3">
        
        <ThemeToggleButton className="h-10 w-10 p-2" />

        <div className="h-10 w-10 flex items-center justify-center 
          bg-white/5 border border-white/10 rounded-lg 
          cursor-pointer hover:bg-white/15 transition-all active:scale-95">
          <Menu size={20} className="text-white/80" />
        </div>
      </div>

    </nav>
  )
}