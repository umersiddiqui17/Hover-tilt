"use client"
import React from 'react'
import { FiMousePointer } from "react-icons/fi";
import { motion, useMotionValue , useSpring, useTransform } from 'framer-motion'; 

export default function Framertilt() {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring,[-0.5,0.5],["17.5deg","-17.5deg"])
    const rotateY = useTransform(mouseXSpring,[-0.5,0.5],["-17.5deg","17.5deg"])

    const handleMouseMove =(e)=>{
        const rect = e.target.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        
        const mouseX = e.clientX-rect.left
        const mouseY = e.clientY-rect.top
        
        const Xpct = mouseX/width - 0.5 
        const Ypct = mouseY/height - 0.5

        x.set(Xpct)
        y.set(Ypct)
        
    }
    const handlemouseLeave = () =>{
        x.set(0)
        y.set(0)
    }
  return (
    <motion.div onMouseMove={handleMouseMove} onMouseLeave={handlemouseLeave} style={{rotateX,rotateY,transformStyle:"preserve-3d"}}  className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300">
        
        <div style={{transformStyle:"preserve-3d",transform:"translateZ(75px)"}} className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg">
        <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          HOVER ME
        </p>
        </div>
    </motion.div>
  )
}
