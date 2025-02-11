import Image from "next/image";
import Link from "next/link";
import { newsData, NewsItem } from "@/data/newsData";
import { notFound } from "next/navigation";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return newsData.map((news) => ({
    id: news.id,
  }));
}

function RelatedNewsCard({ news }: { news: NewsItem }) {
  return (
    <Link
      href={`/news/${news.id}`}
      className="block hover:bg-gray-100 transition-colors rounded-lg"
    >
      <div className="flex items-center space-x-4 p-4">
        <div className="relative w-24 h-16 flex-shrink-0">
          <Image
            src={news.image}
            alt={news.title}
            fill
            sizes="(max-width: 768px) 100px, 150px"
            className="object-cover rounded-md"
          />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">
            {news.title}
          </h4>
          <p className="text-xs text-gray-500">{news.date}</p>
        </div>
      </div>
    </Link>
  );
}

export default async function NewsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Simulate async data fetching
  await new Promise((resolve) => setTimeout(resolve, 0));

  const newsItem = newsData.find(
    (news): news is NewsItem => news.id === params.id
  );

  if (!newsItem) {
    notFound();
  }

  const relatedNews =
    newsItem.relatedNewsIds && newsItem.relatedNewsIds.length > 0
      ? newsData.filter(
          (news): news is NewsItem =>
            Boolean(newsItem.relatedNewsIds?.includes(news.id)) &&
            news.id !== newsItem.id
        )
      : [];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <main className="flex-grow container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-3 text-gray-900">
              {newsItem.title}
            </h1>
            <div className="flex items-center mb-2">
              <span className="text-gray-600 text-sm font-semibold">
                {newsItem.author}
              </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-500 text-sm">{newsItem.date}</span>
            </div>
            <div className="prose max-w-none">
              <Image
                src={newsItem.image}
                alt={newsItem.title}
                width={800}
                height={400}
                className="w-full h-60 object-cover rounded-lg mb-6"
              />
              <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
            </div>
          </div>

          {relatedNews.length > 0 && (
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Related News
              </h2>
              <div className="space-y-4">
                {relatedNews.map((news) => (
                  <RelatedNewsCard key={news.id} news={news} />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
