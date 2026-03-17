import { useState } from 'react'
import { motion } from 'framer-motion'

function BotaoWP() {
  const whatsappNumbers = ['5592984358915', '5592936180461']
  const [currentNumberIndex, setCurrentNumberIndex] = useState(0)
  const MotionAnchor = motion.a
  const MotionSpan = motion.span

  const whatsappHref = `https://wa.me/${whatsappNumbers[currentNumberIndex]}`

  const handleClick = () => {
    setCurrentNumberIndex((prevIndex) => (prevIndex + 1) % whatsappNumbers.length)
  }

  return (
    <MotionAnchor
      href={whatsappHref}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '50px',
        right: '20px',
        zIndex: 50,
      }}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Falar no WhatsApp"
    >
      <MotionSpan
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'rgba(102,178,102,0.4)',
          filter: 'blur(1px)',
        }}
        animate={{ scale: [1, 1.6, 1], opacity: [0.55, 0, 0.55] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
      />

      <MotionSpan
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'rgba(102,178,102,0.25)',
        }}
        animate={{ scale: [1, 1.9, 1], opacity: [0.35, 0, 0.35] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeOut',
          delay: 0.35,
        }}
      />

      <MotionSpan
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px',
          borderRadius: '50%',
          background: '#66b266',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
        }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <MotionSpan
          animate={{ rotate: [0, -8, 8, -6, 6, 0] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 2.2,
          }}
        >
          <img src="/whatsapp.svg" width={30} height={30} alt="WhatsApp" />
        </MotionSpan>
      </MotionSpan>
    </MotionAnchor>
  )
}

export default BotaoWP
