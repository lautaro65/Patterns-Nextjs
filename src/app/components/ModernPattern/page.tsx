"use client"

import React from 'react'
import { useEffect, useState } from "react"
import { motion } from 'framer-motion'

const ModernPattern: React.FC = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-950 to-purple-950 overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(156, 39, 176, 0.1) 0px,
              rgba(156, 39, 176, 0.1) 2px,
              transparent 2px,
              transparent 4px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(103, 58, 183, 0.1) 0px,
              rgba(103, 58, 183, 0.1) 2px,
              transparent 2px,
              transparent 4px
            ),
            linear-gradient(
              90deg,
              rgba(233, 30, 99, 0.07) 0%,
              rgba(156, 39, 176, 0.07) 50%,
              rgba(103, 58, 183, 0.07) 100%
            )
          `,
          backgroundSize: '400% 400%',
        }}
      />
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '150px',
              height: '150px',
              background: `radial-gradient(circle at center, 
                ${['rgba(233, 30, 99, 0.15)', 'rgba(156, 39, 176, 0.15)', 'rgba(103, 58, 183, 0.15)'][i % 3]} 0%,
                transparent 70%
              )`,
              borderRadius: '50%',
              filter: 'blur(20px)',
            }}
          />
        ))}
      </div>
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            repeating-conic-gradient(
              from 0deg,
              rgba(233, 30, 99, 0.03) 0deg 10deg,
              transparent 10deg 20deg
            )
          `,
          backgroundSize: '100px 100px',
        }}
      />
      <motion.div 
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 50% 50%,
              rgba(156, 39, 176, 0.1) 0%,
              transparent 50%
            )
          `,
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  )
}

export default ModernPattern

