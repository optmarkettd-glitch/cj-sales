import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticModal from '@/components/DiagnosticModal'
import SectionDivider from '@/components/SectionDivider'
import MediakiteHero from '@/components/mediakit/MediakiteHero'
import WhoWeAre from '@/components/mediakit/WhoWeAre'
import WhatWeHelp from '@/components/mediakit/WhatWeHelp'
import Products from '@/components/mediakit/Products'
import WorkStages from '@/components/mediakit/WorkStages'
import MediakiteCases from '@/components/mediakit/MediakiteCases'
import FactsAndNumbers from '@/components/mediakit/FactsAndNumbers'
import MediakiteTeam from '@/components/mediakit/MediakiteTeam'
import PricingAndFormats from '@/components/mediakit/PricingAndFormats'
import MediakiteContacts from '@/components/mediakit/MediakiteContacts'
import MediakiteMaterials from '@/components/mediakit/MediakiteMaterials'
import Geography from '@/components/mediakit/Geography'

export const metadata = {
  title: 'Медиакит | C&J Consulting',
  description: 'Практический консалтинг по построению и модернизации отделов продаж. От хаоса к прогнозируемой выручке.',
}

export default function MediakitePage() {
  return (
    <main className="bg-white text-graphite min-h-screen">
      <Header />
      <MediakiteHero />
      <SectionDivider isLight={true} />
      <WhoWeAre />
      <SectionDivider isLight={true} />
      <WhatWeHelp />
      <SectionDivider isLight={true} />
      <Products />
      <SectionDivider isLight={true} />
      <WorkStages />
      <SectionDivider isLight={true} />
      <MediakiteCases />
      <SectionDivider isLight={true} />
      <FactsAndNumbers />
      <SectionDivider isLight={true} />
      <MediakiteTeam />
      <SectionDivider isLight={true} />
      <PricingAndFormats />
      <SectionDivider isLight={true} />
      <MediakiteMaterials />
      <SectionDivider isLight={true} />
      <Geography />
      <SectionDivider isLight={true} />
      <MediakiteContacts />
      <Footer />
      <DiagnosticModal />
    </main>
  )
}

