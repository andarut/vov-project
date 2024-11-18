import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { KeyEvents } from "@/components/key-events"
import { AudioPlayer } from "@/components/audio-player"
import { VideoPlayer } from "@/components/video-player"
import { SearchBar } from "@/components/search-bar"
import { ThisDayInHistory } from "@/components/this-day-in-history"
import { FamilyStories } from "@/components/family-stories"

const politics = [
  { id: 1, src: '/images/stalin.jpg', alt: 'Сталин Иосиф Виссарионович', caption: 'Генеральный Секретарь ЦК КПСС, Герой Социалистического Труда, Герой Советского Союза, Генералиссимус' },
  { id: 2, src: '/images/hitler.jpg', alt: 'Адольф Гитлер', caption: 'Глава (рейхсканцлер) Третьего рейха, главный военный преступник Второй мировой войны' },
  { id: 3, src: '/images/churchill.jpg', alt: 'Уинстон Леонард Спенсер Черчилль', caption: 'Премьер-министр Великобритании, оратор и писатель' },
  { id: 4, src: '/images/roosevelt.jpg', alt: 'Франклин Делано Рузвельт', caption: '32-й президент США' },
  { id: 5, src: '/images/mussolini.jpg', alt: 'Бенито Муссолини', caption: 'Премьер-министр Италии, диктатор («дуче»), основоположник фашизма' },
  { id: 6, src: '/images/truman.jpg', alt: 'Гарри Трумэн', caption: '33-й президент США' }
];


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Герой-секция */}
      <header className="bg-[url('/images/hero-bg.jpg')]   bg-cover bg-center text-white">
        <div className="container mx-auto px-4 py-24 text-center bg-black bg-opacity-60">
          <h1 className="text-5xl font-bold mb-4">Великая Отечественная война 1941-1945 гг.</h1>
          <p className="text-xl mb-8">Подвиг народа, изменивший ход истории</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">

        {/* Этот день в истории войны */}
        <ThisDayInHistory className="mb-16" />

        {/* Ключевые события войны */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Ключевые события войны</h2>
          <KeyEvents />
        </section>

    

        {/* Ключевые исторические личности */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Ключевые исторические личности</h2>
          {/* <h4 className="text-xl font-bold mb-6 text-center">Политики</h4> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {politics.map((image) => (

              <Card>
                <CardHeader>
                  <Image key={image.id} src={image.src} alt={image.alt} width={150} height={150} className="rounded-full mx-auto" />
                  <CardTitle className="text-center mt-4">{image.alt}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">{image.caption}</p>
                </CardContent>
              </Card>

            ))}
          </div>
        </section>

        {/* Аудио и видео материалы */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Аудио и видео архив</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Речь В.М. Молотова 22 июня 1941 года</h3>
              <AudioPlayer src="/audio/molotov-speech.mp3" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Документальные кадры: Битва за Москву</h3>
              <VideoPlayer src="/video/battle-for-moscow.mp4" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Предвыборная речь Гитлера</h3>
              <VideoPlayer src="/video/hitler.mp4" />
              <p className="text-xl mb-4">"Четырнадцать долгих лет эти партии насиловали германскую свободу, избивали немцев дубинками. Если вы проголосуете за национал-социалистов, то не пройдет и двух-трех месяцев, как этот террор будет прекращен".</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Гитлер выступает с речью перед Рейхстагом (германским парламентом)</h3>
              <VideoPlayer src="/video/hitler2.mp4" />
              <p className="text-xl mb-4">"Народы [всего мира] скоро поймут, что Германия, управляемая национал-социалистами, не желает враждовать с ними. Я хочу еще раз послужить пророком. Если международная клика финансистов-евреев — как в Европе, так и вне ее — преуспеет в том, чтобы снова бросить народы Земли в горнило мировой войны, результатом будет не всемирная большевизация и, следовательно, победа еврейства, а полное уничтожение еврейской расы в Европе.".</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}