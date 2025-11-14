const Card = ({ title, children, cta }) => (
  <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8">
    <div className="flex items-center justify-between gap-4">
      <h3 className="font-serif text-2xl tracking-tight">{title}</h3>
      {cta}
    </div>
    <div className="mt-4 text-sm text-gray-700 leading-6">
      {children}
    </div>
  </div>
)

export function QuickLinks() {
  const items = [
    { label: 'Grocery', href: '/grocery', img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Alcohol', href: '/alcohol', img: 'https://images.unsplash.com/photo-1541542684-4a9c8b2262a9?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Tobacco', href: '/tobacco', img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop' },
    { label: 'Vapes', href: '/vapes', img: 'https://images.unsplash.com/photo-1530866495561-5268876a59f0?q=80&w=1200&auto=format&fit=crop' },
  ]
  return (
    <Card title="Shop Departments">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it) => (
          <a key={it.label} href={it.href} className="group relative overflow-hidden rounded-2xl">
            <img src={it.img} alt={it.label} className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-2 left-2 text-white font-medium drop-shadow">{it.label}</div>
          </a>
        ))}
      </div>
    </Card>
  )
}

export function History() {
  return (
    <Card title="Our History" cta={<a href="/our-history" className="text-red-700 hover:underline">Learn more</a>}>
      Founded in 1916, Piggly Wiggly pioneered the self-service grocery model. Our local store carries forward that tradition with a focus on friendly service, fresh selections, and community support.
    </Card>
  )
}

export function Reviews() {
  return (
    <Card title="Google Reviews" cta={<a href="#" className="text-red-700 hover:underline">See all</a>}>
      <ul className="grid gap-3">
        <li className="bg-gray-50 rounded-2xl p-4">“Clean, organized, and the staff is always helpful.” — Melissa</li>
        <li className="bg-gray-50 rounded-2xl p-4">“Great meat department and weekly specials.” — Jordan</li>
        <li className="bg-gray-50 rounded-2xl p-4">“Neighborhood staple. Love supporting local.” — Priya</li>
      </ul>
    </Card>
  )
}

export function PastAds() {
  const imgs = [
    'https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1200&auto=format&fit=crop'
  ]
  return (
    <Card title="Past Ads" cta={<a href="/past-ads" className="text-red-700 hover:underline">Browse gallery</a>}>
      <div className="grid grid-cols-3 gap-3">
        {imgs.map((src, i) => (
          <img key={i} src={src} alt={`Past ad ${i+1}`} className="h-28 w-full object-cover rounded-xl" />
        ))}
      </div>
    </Card>
  )
}

export function Community() {
  return (
    <Card title="Community Involvements" cta={<a href="/community" className="text-red-700 hover:underline">View all</a>}>
      We proudly support local schools, food banks, and neighborhood events. From holiday drives to youth sports sponsorships, community is at the heart of what we do.
    </Card>
  )
}
