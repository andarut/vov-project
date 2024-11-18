import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">О проекте</h1>
      <div className="max-w-2xl mx-auto">
        <Image
          src="/images/me.jpeg"
          alt="Автор проекта"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-8"
        />
        <h2 className="text-2xl font-bold mb-4 text-center">Арутюнян Андрей Романович (БИО-23)</h2>
      </div>
    </div>
  )
}