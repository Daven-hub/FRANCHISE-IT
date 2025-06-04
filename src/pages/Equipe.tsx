import Team from '@/components/Team'
import { Button } from '@/components/ui/button'
import React from 'react'

function Equipe() {
  return (
    <div className='flex flex-col'>
      <div className="w-full relative h-[400px] flex flex-col justify-center overflow-hidden">
        <div className="absolute aspect-square w-full h-full">
          <img src="/banni.jpg" className="w-full h-full object-cover object-right" alt="logo" />
        </div>
        <div className="absolute top-0 left-0 w-full inset-0 grid grid-cols-8 md:grid-cols-12 h-full grid-rows-8 md:grid-rows-6 gap-0 pointer-events-none">
          {Array.from({ length: 12 * 6 }).map((_, i) => (
            <div key={i} className="border border-gray-800/45" />
          ))}
        </div>

        <div className="px-[4.5%] md:px-[6%] w-full z-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 w-full animate-fade-in">
              <h1 className="text-2xl font-title md:text-4xl lg:text-6xl tracking-wide font-bold text-start leading-snug">
                Professionnels au Service de Votre Réussite
              </h1>
              {/* <p className="text-sm md:text-lg font-medium text-white md:text-muted-foreground">
                Spécialistes des solutions informatiques, nous transformons vos idées en projets technologiques concrets. Propulsez votre activité dans l’ère numérique avec nos solutions sur mesure.
              </p> */}
              {/* <div className="grid font-title grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <Button
                  className="glass-effect !text-black !bg-white hover:bg-white/10 border border-white/20 px-8 py-6 md:py-6 text-sm md:text-[1rem] group"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Nos services
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 tracking-wider text-white hover:bg-white/10 px-8 py-6 md:py-6 text-sm md:text-[1rem]"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contactez-nous
                </Button>
              </div> */}
            </div>
            
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      <Team />
    </div>
  )
}

export default Equipe
