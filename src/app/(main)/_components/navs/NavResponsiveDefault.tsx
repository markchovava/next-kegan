"use client"

import IconDefault from "@/_components/icons/IconDefault"
import LogoDefault from "../logos/LogoDefault"
import { useMainNavStore } from "../../_store/useMainNavStore"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"

export default function NavResponsiveDefault() {
    const {setIsMenu, setCurrent, isMenu, navList, current} = useMainNavStore()

    const handleIsMenu = () => {
        setIsMenu(!isMenu)
    }

  return (
    <>
    <section className="w-full p-5">
      <div className="container__primary mx-auto flex items-center justify-between">
        <LogoDefault css="h-20" />
        <button className="cursor-pointer relative h-8 w-8 flex items-center justify-center" onClick={handleIsMenu}>
        <AnimatePresence mode="wait" initial={false}>
            {isMenu ? (
            <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
            >
                <IconDefault type={'close'} css="text-3xl text-gray-50" />
            </motion.div>
            ) : (
            <motion.div
                key="menu"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
            >
                <IconDefault type="menu" css="text-2xl text-gray-50" />
            </motion.div>
            )}
        </AnimatePresence>
        </button>
      </div>
    </section>
    <section className="w-full text-gray-50 bg-blue-800 drop-shadow-xl overflow-hidden">
        <AnimatePresence>
            {isMenu && (
            <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col"
            >
                {navList.map((i, key) => (
                <Link key={key} href={i.href} onClick={() => setIsMenu(false)}>
                    <li
                    onClick={() => setCurrent(i)}
                    className={`${i.id === current.id ? "bg-blue-900" : ""} 
                        hover:bg-blue-900 cursor-pointer transition-all text-center 
                        py-3 px-2 w-full border-b border-blue-400`}
                    >
                    {i.name}
                    </li>
                </Link>
                ))}
            </motion.ul>
            )}
        </AnimatePresence>
    </section>
    </>
  )
}
