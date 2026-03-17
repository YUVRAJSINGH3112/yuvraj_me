"use client"
import Link from "next/link"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton"
import { Menu, X, Home, BriefcaseBusiness, Contact2, Code } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="p-3 flex justify-between items-center
                    fixed top-0 left-0 right-0
                    z-50
                    border border-b-muted-foreground
                    backdrop-blur-xl
                    transition-all duration-300">

      <Avatar className="h-10 w-10 ring-1 ring-white/10">
        <AvatarImage src="/images/avatar.png" alt="Avatar" />
        <AvatarFallback>YS</AvatarFallback>
      </Avatar>

      <div className="flex items-center gap-3">

        <ThemeToggleButton className="h-10 w-10 p-2" />

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="h-10 w-10 flex items-center justify-center 
          bg-secondary border border-white/10 rounded-lg 
          cursor-pointer hover:bg-white/15 transition-all active:scale-95"
        >

          <DropdownMenu onOpenChange={setIsOpen}>

            <DropdownMenuTrigger asChild>

              <button className="p-2">

                <AnimatePresence mode="wait">

                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <X size={22} className="text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Menu size={22} className="text-primary" />
                    </motion.div>
                  )}

                </AnimatePresence>

              </button>

            </DropdownMenuTrigger>


            <DropdownMenuContent className="w-40 " align="end">

              <DropdownMenuGroup>

                <DropdownMenuItem>
                  <Link href="/" className="flex items-center gap-2">
                    <Home className="h-8 w-8" />
                    Home
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/projects" className="flex items-center gap-2">
                    <BriefcaseBusiness className="h-8 w-8" />
                    Projects
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/coding-stats" className="flex items-center gap-2">
                    <Code className="h-8 w-8" />
                    Coding Stats
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuItem>
                <Link href="/contact" className="flex items-center gap-2">
                  <Contact2 className="h-8 w-8" />
                  Contact
                </Link>
              </DropdownMenuItem>

            </DropdownMenuContent>

          </DropdownMenu>

        </div>

      </div>

    </nav>
  )
}