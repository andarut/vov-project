import { VirtualMuseum } from "@/components/virtual-museum"

export default function MuseumPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Виртуальный музей военной техники</h1>
      <VirtualMuseum />
    </div>
  )
}