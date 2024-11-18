import { AwardsDatabase } from "@/components/awards-database"

export default function AwardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">База данных награждений и подвигов</h1>
      <AwardsDatabase />
    </div>
  )
}