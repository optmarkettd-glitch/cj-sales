import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemsBlock from '@/components/ProblemsBlock'
import FirstMonthResults from '@/components/FirstMonthResults'
import SocialProof from '@/components/SocialProof'
import WhyUs from '@/components/WhyUs'
import ProcessVisualization from '@/components/ProcessVisualization'
import ServicesPreview from '@/components/ServicesPreview'
import CasesPreview from '@/components/CasesPreview'
import TeamPreview from '@/components/TeamPreview'
import GanttChartHome from '@/components/GanttChartHome'
import FAQ from '@/components/FAQ'
import CTABlock from '@/components/CTABlock'
import Footer from '@/components/Footer'
import DiagnosticModal from '@/components/DiagnosticModal'
import MaterialsModal from '@/components/MaterialsModal'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  return (
    <main className="bg-graphite text-white min-h-screen">
      <Header />
      <Hero />
      <ProblemsBlock />
      <FirstMonthResults />
      <SocialProof />
      <SectionDivider />
      <WhyUs />
      <SectionDivider />
      <ProcessVisualization />
      <SectionDivider />
      <GanttChartHome />
      <SectionDivider />
      <ServicesPreview />
      <CasesPreview />
      <TeamPreview />
      <FAQ />
      <CTABlock />
      <Footer />
      <DiagnosticModal />
    </main>
  )
}

