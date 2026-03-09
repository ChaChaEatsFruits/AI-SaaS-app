import React from 'react'
import {Button} from '@/components/ui/button';
import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import { recentSessions } from '@/constants';
const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard 
          id="123" 
          name="Neura the Brainy Explorer" 
          topic="Topic: Neral Network of the Brain" 
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard 
          id="456" 
          name="Countsy the Number Wizard" 
          topic="Topic: Derivatives and Integrals" 
          subject="math"
          duration={45}
          color="#e5fd0ff"
        />
        <CompanionCard 
          id="453" 
          name="Verba the Vocablary Builder" 
          topic="Topic: Language" 
          subject="English Literature"
          duration={45}
          color="#faea6e"
        />
      </section>

      <section className='home-section'>
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        >

        </CompanionsList>
        <CTA></CTA>
      </section>
    </main>
  )
}

export default Page