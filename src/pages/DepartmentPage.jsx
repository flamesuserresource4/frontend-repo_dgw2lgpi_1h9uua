export default function DepartmentPage({ title, disclaimer, items }) {
  return (
    <article>
      <header className="mb-6">
        <h1 className="font-serif text-4xl tracking-tight">{title}</h1>
        {disclaimer && <p className="mt-2 text-sm text-gray-600">{disclaimer}</p>}
      </header>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div key={i} className="bg-white rounded-3xl shadow-sm overflow-hidden">
            <img src={it.image} alt={it.name} className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-medium">{it.name}</h3>
              {it.text && <p className="mt-1 text-sm text-gray-600">{it.text}</p>}
            </div>
          </div>
        ))}
      </section>
    </article>
  )
}
