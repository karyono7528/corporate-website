"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { newsData, NewsItem } from "@/data/newsData";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [...new Set(newsData.map((news) => news.category))];

  const filteredNews = useMemo(() => {
    return newsData.filter(
      (news) =>
        (selectedCategory ? news.category === selectedCategory : true) &&
        (searchQuery
          ? news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            news.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
            news.tags.some((tag) =>
              tag.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : true)
    );
  }, [selectedCategory, searchQuery]);

  const paginatedNews = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredNews.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredNews, currentPage]);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mt-10 text-center mb-12">
          News & Insights
        </h1>

        {/* Search and Filter Section */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full ${
                !selectedCategory
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              All News
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute right-4 top-3 text-gray-400"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* News Grid */}
        {paginatedNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 py-12">
            No news articles found matching your search or filter.
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-full ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

function NewsCard({ news }: { news: NewsItem }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={news.image}
          alt={news.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-blue-600 text-sm font-semibold">
            {news.category}
          </span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-500 text-sm">{news.date}</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-500 text-sm">
            {news.readTime} min read
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{news.title}</h3>
        <p className="text-gray-600 mb-4">{news.summary}</p>
        <div className="flex justify-between items-center">
          <Link
            href={`/news/${news.id}`}
            className="text-blue-600 font-semibold hover:text-blue-700"
          >
            Read More →
          </Link>
          <div className="flex space-x-2">
            {news.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
