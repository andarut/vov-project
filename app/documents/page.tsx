import { WarArchive } from "@/components/war-archive"

export default function DocumentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Архив документов о Великой Отечественной войне</h1>
      <WarArchive />
    </div>
  )
}