import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Layout from './Layout'
import { motion } from 'framer-motion';
import { formationData } from '@/data/formation';
import { Check } from 'lucide-react';

function Formations() {
  return (
    <Layout>
      <div className='hero h-[350px] md:h-[calc(100vh-62.5px)] overflow-hidden relative'>
        <img src="/images/img1.jpg" className='w-full h-full top-0 left-0 object-cover' alt="" />
        <div className='absolute inset-0 bg-gradient-to-r from-tech-dark via-tech-dark/70 to-black/30'></div>
        <div className='max-w-4xl w-full m-0 flex flex-col gap-4 md:gap-5 top-1/2 -translate-y-1/2 left-0 absolute px-[5%]'>
          <h1 className='heading-md md:heading-xl !leading-[1.35] font-title text-white'>Meilleur centre de formation au <mark className='bg-transparent text-yellow-500'>Cameroun</mark></h1>
          {/* <div className='flex flex-wrap gap-3 text-sm font-semibold text-white'>
                <span className='inline-flex items-center rounded-full border border-white/20 bg-black/20 px-4 py-2'>Qualification professionnelle RNCP</span>
                <span className='inline-flex items-center rounded-full border border-white/20 bg-primary/20 px-4 py-2'>Titre certifiant niveau 5</span>
              </div> */}
          <div className='border-l-[4px] md:border-l-[6px] text-sm md:text-lg rounded-r-full md:pr-8 text-white font-medium bg-gray-50/20 w-fit py-1.5 md:py-2.5 px-3 md:px-6 border-primary'>Agrément du MINEFOP <mark className='bg-transparent text-yellow-500'>N°000555/MINEFOP/SG/DFOP</mark></div>
          <div className='grid grid-cols-1 text-[0.9rem] md:text-[1rem] md:grid-cols-2 gap-3.5 md:gap-4 mt-1.5 md:mt-4 w-full max-w-xl'>
            <Link to="/formations/details/php" className='text-center rounded-full border border-white bg-white text-tech-dark px-6 py-2 md:py-3 hover:bg-white/90 transition'>Fullstack PHP</Link>
            <Link to="/formations/details/javascript" className='text-center rounded-full bg-primary text-white px-6 py-2 md:py-3 hover:bg-primary/90 transition'>Fullstack JavaScript</Link>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 px-[5%] section-padding gap-6 md:gap-10'>
        <div className='rounded-[6px] min-h-[300px] overflow-hidden shadow-md'>
            <img src="/images/img3.jpg" className='h-full w-full object-cover' alt="images3"/>
        </div>
        <div className=''>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2.5 w-full mb-4"
          >
            <div className="inline-block w-fit px-6 py-1 bg-black/5 dark:bg-white/5 text-primary rounded-full text-xs font-medium border border-white/10">
              A propos
            </div>
            <div className="space-y-1">
              <h2 className="text-lg md:text-3xl font-bold font-title text-tech-dark dark:text-white">De Franchise IT</h2>
              <p className="text-md md:text-lg w-3/2 text-tech-dark/80 dark:text-white/70">
                Nous sommes un centre de formation nouvellement établi, offrant des formations purement pratiques dans le domaine de l’informatique, notamment en programmation d’applications (Web, mobile & Desktop) et en design graphique. L’entreprise met à la disposition des apprenants l’expérience de ses formateurs acquise à travers des projets nationaux et internationaux, afin de proposer un apprentissage concret et orienté vers le monde professionnel.
              </p>
            </div>
          </motion.div>
          <div className='space-y-4  text-accent font-medium'>
            <span className='flex items-center gap-2 text-md md:text-lg'><div className='border border-tech-dark w-fit p-1'><Check size={15} className='text-tech-dark'/> </div>
              Formations qui repondent aux besoins des entreprises</span>
              <span className='flex items-center gap-2 text-md md:text-lg'><div className='border border-tech-dark w-fit p-1'><Check size={15} className='text-tech-dark'/> </div>
              Formations accessible à tous avec ou sans Baccalauréat</span>
              <span className='flex items-center gap-2 text-md md:text-lg'><div className='border border-tech-dark w-fit p-1'><Check size={15} className='text-tech-dark'/> </div>
              Grande expérience dans le domaine des formations IT</span>
              <span className='flex items-center gap-2 text-md md:text-lg'><div className='border border-tech-dark w-fit p-1'><Check size={15} className='text-tech-dark'/> </div>
              Des Formateurs seniors et hyper compétents</span>
              <span className='flex items-center gap-2 text-md md:text-lg'><div className='border border-tech-dark w-fit p-1'><Check size={15} className='text-tech-dark'/> </div>
              Formations pratiques à 80%</span>
          </div>
        </div>
      </div>

      <div className='bg-secondary section-padding px-[5%]'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center flex items-center flex-col gap-3.5 w-full mb-7"
        >
          <div className="inline-block px-6 py-1 bg-black/5 dark:bg-white/5 text-primary rounded-full text-xs font-medium border border-white/10">
            formations
          </div>
          <div className="space-y-1.5 max-w-4xl">
            <h2 className="heading-md md:heading-lg font-title text-tech-dark dark:text-white">Nos Formations</h2>
            <p className="text-md md:text-lg w-3/2 text-tech-dark/80 dark:text-white/70">
              Nous proposons des formations pratiques et innovantes adaptées à tous les niveaux, visant à développer des compétences techniques solides et directement applicables en entreprise.
            </p>
          </div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
          {formationData?.map((x,index)=>
            <NavLink key={index} to={"/formations/details/"+x.id} className='border overflow-hidden rounded-sm shadow-sm'>
                <img src={x.banniere} alt={x.title} />
            </NavLink>
          )}
        </div>
      </div>

      <div className='bg-tech-dark section-padding px-[5%]'>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2.5 w-full mb-4"
          >
            {/* <div className="inline-block w-fit px-6 py-1 bg-black/5 dark:bg-white/5 text-primary rounded-full text-xs font-medium border border-white/10">
              A propos
            </div> */}
            <div className="space-y-4">
              <h2 className="text-lg md:text-3xl font-bold font-title text-white">LA COMPETENCE</h2>
              <p className="text-md md:text-lg w-3/2 text-white/70">
                L’objectif principal de Franchise IT est de rendre les apprenants compétents grâce à des formations ouvertes à tous, avec ou sans Baccalauréat. Basées à 80 % sur la pratique et une approche pédagogique unique, elles permettent de développer des compétences solides et directement exploitables sur le marché de l’emploi.
              </p>
            </div>
          </motion.div>
      </div>

    </Layout>
  )
}

export default Formations
