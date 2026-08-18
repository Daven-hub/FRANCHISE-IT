import React from 'react'
import { useParams, NavLink } from 'react-router-dom';
import Layout from './Layout'
import { ChevronDown } from 'lucide-react'
import { formationData } from '@/data/formation'
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "../components/ui/tabs";

function DetailFormation() {
    const { id } = useParams()

    const formation = formationData.find(d => d.id === id)

    const tabsMenu = [
        { value: "apercu", label: "Aperçu" },
        { value: "web", label: "Web" },
        { value: "mobile", label: "Web & Mobile" },
    ];

    if (!formation || formation.id !== id) {
        return (
            <Layout>
                <div className='h-[350px] items-center justify-center text-3xl font-semibold m-0 flex flex-col gap-6 px-[5%]'>
                    Formation non trouvée
                </div>
            </Layout>
        )
    }
    return (
        <Layout>
            <div className='hero h-[200px] md:h-[350px] relative'>
                <img src="/images/img2.jpg" loading='eager' className='w-full h-full top-0 left-0 object-cover' alt="" />
                <div className='absolute inset-0 bg-gradient-to-r from-tech-dark/80 via-tech-dark/60 to-tech-dark/80'></div>
                <div className='w-full items-center justify-center text-4xl text-center md:text-6xl font-semibold text-white m-0 flex flex-col gap-6 top-1/2 -translate-y-1/2 left-0 absolute px-[5%]'>
                    {formation.title || "Formation"}
                </div>
            </div>

            <div className='section-padding px-[5%] md:px-[6%] grid grid-cols-1 md:grid-cols-[1fr_410px] gap-9'>
                <div className='flex flex-col gap-5'>
                    <img src={formation.banniere} loading='eager' className='aspect-square border object-cover' alt={formation.title} />
                    <div className='flex flex-col gap-1.5'>
                        <h1 className='text-xl font-bold font-mont text-tech-dark md:text-3xl'> Formation en programmation {formation.title}</h1>
                        <span className='text-[1rem] md:text-lg text-muted-foreground'> {formation.description}</span>
                    </div>
                </div>
                <div className='space-y-7'>
                    <div className='px-4 py-3 flex items-center justify-center text-white bg-accent rounded-sm font-semibold'> Je m'inscris</div>
                    <div className='border rounded-[6px] h-fit overflow-hidden'>
                        <div className='px-4 md:px-6 py-5 text-xl md:text-2xl border-b font-semibold'>
                            Syllabus des cours
                        </div>
                        <ul>
                            {formation.syllabus.map((x, index) =>
                                <li key={index} className='py-4 text-tech-blue font-semibold flex justify-between items-center text-[0.9rem] md:text-md px-4 md:px-6 border-b last-of-type:border-0'>{x.title} <ChevronDown className='text-muted-foreground' /> </li>
                            )}
                        </ul>
                    </div>
                    <div className='border rounded-[6px] h-fit overflow-hidden'>
                        <div className='py-5 px-4 md:px-6 text-xl md:text-2xl border-b font-semibold'>
                            Autres formations
                        </div>
                        <ul>
                            {formationData.filter((y) => y.id !== id).map((x, index) =>
                                <li key={index}>
                                    <NavLink to={'/formations/details/' + x.id} className='py-4 flex gap-3 hover:bg-gray-100 transition-all duration-300 items-center text-lg px-4 md:px-6 border-b last-of-type:border-0'>
                                        <img src={x.banniere} loading='eager' className=' w-[40px] h-[40px] aspect-square object-cover' alt={x.title} />
                                        <span className='font-semibold text-[1rem]'>{x.title}</span>
                                    </NavLink></li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-[5%] md:px-[6%] section-padding pt-0'>
                <Tabs defaultValue="apercu" className='!rounded-none'>

                    <TabsList className="grid grid-cols-3 border-b !rounded-none border-gray-200 bg-transparent !p-0 !m-0">
                        {tabsMenu.map((x,index)=>
                            <TabsTrigger
                                key={index}
                                value={x.value}
                                className="
            relative text-sm font-medium h-full bg-transparent text-gray-500
            data-[state=active]:text-primary
            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
            after:bg-primary after:transition-all
            data-[state=active]:after:w-full
        "
                            >
                                {x.label}
                            </TabsTrigger>
                        )}

                    </TabsList>

                    <TabsContent value="apercu" className="pt-2">
                        <p className='text-muted-foreground text-[0.95rem] md:text-[1.1rem] !leading-[1.5]'>{formation.detail.apercu} </p>
                    </TabsContent>

                    <TabsContent value="web" className="pt-2">
                        <div className='space-y-2 text-lg'>
                            <h1 className='font-bold text-tech-blue'>{formation.detail.web.techno}</h1>
                            <div>Durée : <mark className='bg-transparent font-bold text-tech-dark/80'>{formation.detail.web.duree}</mark></div>
                            <div>Prix : <mark className='bg-transparent font-bold text-tech-dark/80'>{formation.detail.web.prix}</mark></div>
                        </div>
                    </TabsContent>

                    <TabsContent value="mobile" className="pt-2">
                        <div className='space-y-2 text-lg'>
                            <h1 className='font-bold text-tech-blue'>{formation.detail.webmobile.techno}</h1>
                            <div>Durée : <mark className='bg-transparent font-bold text-tech-dark/80'>{formation.detail.webmobile.duree}</mark></div>
                            <div>Prix : <mark className='bg-transparent font-bold text-tech-dark/80'>{formation.detail.webmobile.prix}</mark></div>
                        </div>
                    </TabsContent>

                </Tabs>
            </div>
        </Layout>
    )
}

export default DetailFormation