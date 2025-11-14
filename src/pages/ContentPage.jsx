export default function ContentPage({ title, children }) {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-6">
        <h1 className="font-serif text-4xl tracking-tight">{title}</h1>
      </header>
      <div className="prose max-w-none prose-gray">
        {children}
      </div>
    </article>
  )
}
