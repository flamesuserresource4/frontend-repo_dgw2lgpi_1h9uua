export default function ServicePage({ title, description, hours, fees, documents }) {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-6">
        <h1 className="font-serif text-4xl tracking-tight">{title}</h1>
        {description && <p className="mt-2 text-gray-700 leading-7">{description}</p>}
      </header>
      <div className="grid md:grid-cols-2 gap-6">
        {hours && (
          <section className="bg-white rounded-3xl shadow-sm p-6">
            <h2 className="font-serif text-xl mb-2">Business Hours</h2>
            <ul className="text-gray-700 leading-7">
              {hours.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </section>
        )}
        {(fees || documents) && (
          <section className="bg-white rounded-3xl shadow-sm p-6">
            {fees && (
              <div className="mb-4">
                <h2 className="font-serif text-xl mb-2">Fees</h2>
                <ul className="text-gray-700 leading-7 list-disc ml-5">
                  {fees.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            )}
            {documents && (
              <div>
                <h2 className="font-serif text-xl mb-2">Required Documents</h2>
                <ul className="text-gray-700 leading-7 list-disc ml-5">
                  {documents.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            )}
          </section>
        )}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="#visit" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-white" style={{ backgroundColor: '#CC2131' }}>Visit Store</a>
        <a href="tel:+10000000000" className="inline-flex items-center justify-center rounded-xl px-4 py-2 border border-gray-300 text-gray-800">Call</a>
      </div>
      <p className="mt-4 text-xs text-gray-500">Information subject to change. Please contact the store for current details.</p>
    </article>
  )
}
