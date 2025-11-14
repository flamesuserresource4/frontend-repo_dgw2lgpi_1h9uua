import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Home, Beer, Cigarette, CircleDollarSign, ScrollText, Stamp } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const brand = {
  red: '#CC2131',
  bg: '#FAFAF8',
  card: '#FFFFFF',
  text: '#2C2C2C',
  muted: '#6B6B6B',
}

const LeftNav = () => (
  <aside className="hidden lg:flex lg:flex-col lg:sticky top-0 h-screen w-56 border-r border-gray-200 bg-white/80 backdrop-blur-sm">
    <div className="p-6">
      <Link to="/" className="flex items-center gap-2" aria-label="Piggly Wiggly Home">
        <div className="h-10 w-10 rounded-full" style={{ backgroundColor: brand.red }} />
        <span className="font-serif text-xl tracking-tight" style={{ color: brand.text }}>Piggly Wiggly</span>
      </Link>
    </div>
    <nav className="flex-1 px-4 space-y-1" aria-label="Primary">
      <NavLink to="/" end className={({isActive}) => classNames('flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition', isActive ? 'bg-red-50 text-red-700' : 'text-gray-700 hover:bg-gray-100') }>
        <Home className="h-4 w-4" /> Home
      </NavLink>
      <NavLink to="/alcohol" className={({isActive}) => classNames('flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition', isActive ? 'bg-red-50 text-red-700' : 'text-gray-700 hover:bg-gray-100') }>
        <Beer className="h-4 w-4" /> Beer (IPA/THC)
      </NavLink>
      <NavLink to="/tobacco" className={({isActive}) => classNames('flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition', isActive ? 'bg-red-50 text-red-700' : 'text-gray-700 hover:bg-gray-100') }>
        <Cigarette className="h-4 w-4" /> Tobacco
      </NavLink>
      <NavLink to="/vapes" className={({isActive}) => classNames('flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition', isActive ? 'bg-red-50 text-red-700' : 'text-gray-700 hover:bg-gray-100') }>
        <ScrollText className="h-4 w-4" /> Vapes
      </NavLink>
    </nav>
    <div className="px-6 pb-6 text-xs text-gray-500">© {new Date().getFullYear()} Piggly Wiggly</div>
  </aside>
)

const RightNav = () => (
  <aside className="hidden xl:flex xl:flex-col xl:sticky top-0 h-screen w-64 border-l border-gray-200 bg-white/60 backdrop-blur-sm">
    <div className="p-6">
      <h3 className="font-serif text-lg" style={{ color: brand.text }}>Services</h3>
    </div>
    <nav className="flex-1 px-4 space-y-1" aria-label="Services">
      <NavLink to="/check-cashing" className={({isActive}) => classNames('block px-3 py-2 rounded-xl text-sm transition', isActive ? 'bg-red-50 text-red-700' : 'text-gray-700 hover:bg-gray-100') }>Check Cashing</NavLink>
      <NavLink to="/lottery" className={({isActive}) => classNames('block px-3 py-2 rounded-xl text-sm transition', isActive ? 'bg-red-50 text-red-700' : 'text-gray-700 hover:bg-gray-100') }>Lottery & Games</NavLink>
      <NavLink to="/money-orders" className={({isActive}) => classNames('block px-3 py-2 rounded-xl text-sm transition', isActive ? 'bg-red-50 text-red-700' : 'text-gray-700 hover:bg-gray-100') }>Money Orders/Transfer</NavLink>
      <NavLink to="/notary" className={({isActive}) => classNames('block px-3 py-2 rounded-xl text-sm transition', isActive ? 'bg-red-50 text-red-700' : 'text-gray-700 hover:bg-gray-100') }>Notary Service</NavLink>
    </nav>
  </aside>
)

function MobileTopBar({ open, setOpen }) {
  return (
    <div className="lg:hidden sticky top-0 z-40 bg-white/80 backdrop-blur supports-backdrop-blur:border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full" style={{ backgroundColor: brand.red }} />
          <span className="font-serif text-lg" style={{ color: brand.text }}>Piggly Wiggly</span>
        </Link>
        <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} className="p-2 rounded-lg border border-gray-200">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="px-4 pb-4 grid gap-2">
          <div className="text-xs uppercase tracking-wide text-gray-500">Browse</div>
          <div className="grid grid-cols-2 gap-2">
            <NavLink to="/" end className="px-3 py-2 rounded-xl bg-gray-50" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/grocery" className="px-3 py-2 rounded-xl bg-gray-50" onClick={() => setOpen(false)}>Grocery</NavLink>
            <NavLink to="/alcohol" className="px-3 py-2 rounded-xl bg-gray-50" onClick={() => setOpen(false)}>Alcohol</NavLink>
            <NavLink to="/tobacco" className="px-3 py-2 rounded-xl bg-gray-50" onClick={() => setOpen(false)}>Tobacco</NavLink>
            <NavLink to="/vapes" className="px-3 py-2 rounded-xl bg-gray-50" onClick={() => setOpen(false)}>Vapes</NavLink>
          </div>
          <div className="text-xs uppercase tracking-wide text-gray-500 mt-2">Services</div>
          <div className="grid grid-cols-2 gap-2">
            <NavLink to="/check-cashing" className="px-3 py-2 rounded-xl bg-gray-50" onClick={() => setOpen(false)}>Check Cashing</NavLink>
            <NavLink to="/lottery" className="px-3 py-2 rounded-xl bg-gray-50" onClick={() => setOpen(false)}>Lottery & Games</NavLink>
            <NavLink to="/money-orders" className="px-3 py-2 rounded-xl bg-gray-50" onClick={() => setOpen(false)}>Money Orders</NavLink>
            <NavLink to="/notary" className="px-3 py-2 rounded-xl bg-gray-50" onClick={() => setOpen(false)}>Notary</NavLink>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Layout() {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen" style={{ backgroundColor: brand.bg, color: brand.text }}>
      <MobileTopBar open={open} setOpen={setOpen} />
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-[14rem_minmax(0,1fr)] xl:grid-cols-[14rem_minmax(0,1fr)_16rem]">
        <LeftNav />
        <main className="min-h-screen px-4 sm:px-6 lg:px-10 py-8">
          <Outlet />
          <footer className="mt-12 py-8 text-sm text-gray-500">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p>© {new Date().getFullYear()} Piggly Wiggly. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link to="/our-history" className="hover:underline">Our History</Link>
                <Link to="/community" className="hover:underline">Community Involvements</Link>
                <Link to="/past-ads" className="hover:underline">Past Ads</Link>
              </div>
            </div>
          </footer>
        </main>
        <RightNav />
      </div>
    </div>
  )
}
