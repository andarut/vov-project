import { PhotoArchive } from "@/components/photo-archive"

export default function PhotoArchivePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Архив военных фотографий</h1>
      <PhotoArchive />
    </div>
  )
}