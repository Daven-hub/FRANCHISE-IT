import SolutionsProfessionnelles from '@/components/FranchisePresentation'
import Team from '@/components/Team'
import Layout from './Layout'

function Equipe() {
  return (
    <Layout>
      <div className='flex flex-col'>
        <div className="w-full relative h-[250px] md:h-[400px] flex flex-col justify-center overflow-hidden">
          <div className="absolute aspect-square w-full h-full">
            <img src="/banni.jpg" loading='eager' className="w-full h-full object-cover object-right" alt="logo" />
          </div>
          <div className="absolute top-0 left-0 w-full inset-0 grid grid-cols-8 md:grid-cols-12 h-full grid-rows-8 md:grid-rows-6 gap-0 pointer-events-none">
            {Array.from({ length: 12 * 6 }).map((_, i) => (
              <div key={i} className="border border-gray-800/25 dark:border-gray-800/45" />
            ))}
          </div>

          <div className="px-[4.5%] md:px-[6%] w-full z-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-5 w-full animate-fade-in">
                <h1 className="text-2xl font-title text-white/95 md:text-4xl lg:text-6xl tracking-wide font-bold text-start leading-snug">
                  Professionnels au Service de Votre Réussite
                </h1>
              </div>

            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        <Team />
        <SolutionsProfessionnelles />
      </div>
    </Layout>
  )
}

export default Equipe
