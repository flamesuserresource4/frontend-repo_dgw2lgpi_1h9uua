import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl shadow-sm" aria-label="Intro">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(204,33,49,0.08)_0%,rgba(204,33,49,0)_70%)]" />
      <div className="h-[360px] sm:h-[420px] rounded-3xl overflow-hidden">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 flex items-end p-6 sm:p-10 pointer-events-none">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">Your Neighborhood Piggly Wiggly</h1>
          <p className="mt-3 text-white/90 drop-shadow">Fresh groceries, friendly service, and local value — since 1916.</p>
        </div>
      </div>
    </section>
  )
}
