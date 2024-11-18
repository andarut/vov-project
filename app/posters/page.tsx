import { WarPosters } from "@/components/war-posters"

export default function PostersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Коллекция военных плакатов</h1>
      <WarPosters />
    </div>
  )
}