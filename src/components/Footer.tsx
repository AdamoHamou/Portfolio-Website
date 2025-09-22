import React from 'react'
import LuffyJollyRoger from '../assets/LuffyJollyRoger.png'



const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pointer-events-auto bg-black/20 backdrop-blur-md border-t border-black-500/20 rounded-t-xl px-6 py-3 flex items-center justify-between text-white">
          <div className="text-sm">Adam Hamou @ 2025</div>
          <div className="flex items-center gap-2 text-sm">
            <span>the pirate king's biggest fan</span>
            <img src={LuffyJollyRoger} alt="Luffy Jolly Roger" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
