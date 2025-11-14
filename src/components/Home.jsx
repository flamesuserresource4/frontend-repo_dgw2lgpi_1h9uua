import Hero from './Hero'
import { QuickLinks, History, Reviews, PastAds, Community } from './Sections'

export default function Home() {
  return (
    <div className="space-y-8">
      <Hero />

      <div className="grid gap-8">
        <QuickLinks />
        <div className="grid md:grid-cols-2 gap-8">
          <History />
          <Reviews />
        </div>
        <PastAds />
        <Community />
      </div>
    </div>
  )
}
