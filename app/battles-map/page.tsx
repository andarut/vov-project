import { BattlesMap } from "@/components/battles-map"

export default function BattlesMapPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Интерактивная карта основных сражений</h1>
      <BattlesMap />
    </div>
  )
}