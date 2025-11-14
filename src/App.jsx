import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import ServicePage from './pages/ServicePage'
import DepartmentPage from './pages/DepartmentPage'
import ContentPage from './pages/ContentPage'

const alcoholItems = [
  { name: 'Local IPA', image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=1200&auto=format&fit=crop', text: 'Hoppy and bright.' },
  { name: 'Craft Lager', image: 'https://images.unsplash.com/photo-1487020530383-c62abe4f9346?q=80&w=1200&auto=format&fit=crop', text: 'Crisp finish.' },
  { name: 'Seltzer Pack', image: 'https://images.unsplash.com/photo-1598901627264-02e2a7e69a64?q=80&w=1200&auto=format&fit=crop', text: 'Assorted flavors.' },
]

const tobaccoItems = [
  { name: 'Premium Cigars', image: 'https://images.unsplash.com/photo-1639632074007-986083627f0a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDcmFmdCUyMExhZ2VyfGVufDB8MHx8fDE3NjMxMjc0Mjd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', text: 'Hand-rolled selection.' },
  { name: 'Pipe Tobacco', image: 'https://images.unsplash.com/photo-1756361947369-8c0e1e8d6828?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTZWx0emVyJTIwUGFja3xlbnwwfDB8fHwxNzYzMTI3NDI4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', text: 'Classic blends.' },
]

const vapeItems = [
  { name: 'Starter Kit', image: 'https://images.unsplash.com/photo-1527766833261-b09c3163a791?q=80&w=1200&auto=format&fit=crop', text: 'All-in-one.' },
  { name: 'Fruit Flavors', image: 'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=1200&auto=format&fit=crop', text: 'Popular picks.' },
]

const groceryItems = [
  { name: 'Fresh Produce', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop', text: 'Seasonal and local.' },
  { name: 'Butcher Cuts', image: 'https://images.unsplash.com/photo-1569790554690-1c0877b2fc6c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGcnVpdCUyMEZsYXZvcnN8ZW58MHwwfHx8MTc2MzEyNzQyOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', text: 'Quality meats.' },
  { name: 'Dairy Favorites', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1200&auto=format&fit=crop', text: 'Everyday essentials.' },
]

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="grocery" element={<DepartmentPage title="Grocery" items={groceryItems} />} />
        <Route path="alcohol" element={<DepartmentPage title="Alcohol" disclaimer="You must be 21+ to purchase — ID required." items={alcoholItems} />} />
        <Route path="tobacco" element={<DepartmentPage title="Tobacco" disclaimer="You must be 21+ to purchase — ID required." items={tobaccoItems} />} />
        <Route path="vapes" element={<DepartmentPage title="Vapes" disclaimer="You must be 21+ to purchase — ID required." items={vapeItems} />} />

        <Route path="check-cashing" element={<ServicePage title="Check Cashing" description="Fast, friendly check cashing with transparent fees." hours={["Mon–Sat: 9am–8pm", "Sun: 10am–6pm"]} fees={["1% for payroll/government checks", "3% for personal checks"]} documents={["Valid government-issued ID"]} />} />
        <Route path="lottery" element={<ServicePage title="Lottery & Games" description="Play your favorite state lottery games and scratch-offs." hours={["Mon–Sun: Store hours"]} fees={[]} documents={[]} />} />
        <Route path="money-orders" element={<ServicePage title="Money Orders / Transfer" description="Secure money orders and transfers with partner providers." hours={["Mon–Sat: 9am–8pm", "Sun: 10am–6pm"]} fees={["Standard provider fees apply"]} documents={["Valid ID may be required"]} />} />
        <Route path="notary" element={<ServicePage title="Notary Service" description="Licensed notary available during select hours." hours={["Mon–Fri: 10am–6pm"]} fees={["$5 per signature"]} documents={["Valid ID required"]} />} />

        <Route path="our-history" element={<ContentPage title="Our History"> <p>Piggly Wiggly introduced the world to self-service grocery shopping in 1916. Our store celebrates that heritage with a focus on honest value and neighborly care.</p></ContentPage>} />
        <Route path="past-ads" element={<ContentPage title="Past Ads"> <p>Explore a curated gallery of our past print ads and weekly circulars.</p></ContentPage>} />
        <Route path="community" element={<ContentPage title="Community Involvements"> <p>We support local schools, charities, and events through donations and sponsorships.</p></ContentPage>} />
      </Route>
    </Routes>
  )
}

export default App
