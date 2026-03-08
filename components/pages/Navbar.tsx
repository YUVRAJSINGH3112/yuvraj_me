"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

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

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="h-10 w-10 flex items-center justify-center 
          bg-white/5 border border-white/10 rounded-lg 
          cursor-pointer hover:bg-white/15 transition-all active:scale-95"
        >

          <AnimatePresence mode="wait">

            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
              >
                <X size={20} className="text-white/80" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
              >
                <Menu size={20} className="text-white/80" />
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>

    </nav>
  )
}