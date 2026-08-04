"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { imageUrl, formatDate } from "@/sanity/utils";
import type { ThoughtLeadershipPost, NewsItem } from "@/sanity/types";

interface InsightsSectionProps {
  thoughtLeadership: ThoughtLeadershipPost[];
  newsItems: NewsItem[];
}

export default function InsightsSection({
  thoughtLeadership,
  newsItems,
}: InsightsSectionProps) {
  if (!thoughtLeadership.length && !newsItems.length) return null;

  return (
    <section
      id="insights"
      className="bg-white px-6 py-28 md:py-36 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Insights
          </span>
          <h2 className="font-heading mt-6 text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
            Thought Leadership &amp; <span className="text-gold">News</span>
          </h2>
        </motion.div>

        {thoughtLeadership.length > 0 && (
          <div className="mt-16">
            <h3 className="font-heading text-xl font-semibold text-navy md:text-2xl">
              Thought Leadership
            </h3>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {thoughtLeadership.map((post, index) => {
                const coverUrl = post.coverImage
                  ? imageUrl(post.coverImage, { width: 800, quality: 75 })
                  : null;

                return (
                  <motion.article
                    key={`${post.title}-${index}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group overflow-hidden rounded-3xl border border-light-gray bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-light-bg">
                      {coverUrl ? (
                        <Image
                          src={coverUrl}
                          alt={post.title ?? "Thought leadership"}
                          width={800}
                          height={500}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-navy/70">
                          <span className="font-heading text-3xl font-bold text-gold">
                            {post.title?.charAt(0) ?? "M"}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <p className="flex items-center gap-2 text-xs font-medium text-gray-400">
                        <CalendarDays size={14} className="text-gold" />
                        {formatDate(post.publishedAt)}
                      </p>
                      <h4 className="font-heading mt-3 text-lg font-semibold leading-snug text-navy">
                        {post.title}
                      </h4>
                      {post.excerpt && (
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500">
                          {post.excerpt}…
                        </p>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        )}

        {newsItems.length > 0 && (
          <div className="mt-16">
            <h3 className="font-heading text-xl font-semibold text-navy md:text-2xl">
              Latest News
            </h3>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((item, index) => {
                const coverUrl = item.coverImage
                  ? imageUrl(item.coverImage, { width: 800, quality: 75 })
                  : null;

                const content = (
                  <>
                    <div className="aspect-[16/10] overflow-hidden bg-light-bg">
                      {coverUrl ? (
                        <Image
                          src={coverUrl}
                          alt={item.title ?? "News"}
                          width={800}
                          height={500}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-navy/70">
                          <span className="font-heading text-3xl font-bold text-gold">
                            {item.title?.charAt(0) ?? "N"}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <p className="flex items-center gap-2 text-xs font-medium text-gray-400">
                        <CalendarDays size={14} className="text-gold" />
                        {formatDate(item.publishedAt)}
                      </p>
                      <h4 className="font-heading mt-3 text-lg font-semibold leading-snug text-navy">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500">
                          {item.description}
                        </p>
                      )}
                      {item.externalLink && (
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-colors group-hover:text-navy">
                          Read More
                          <ArrowUpRight size={16} />
                        </span>
                      )}
                    </div>
                  </>
                );

                const cardClass =
                  "group flex h-full flex-col overflow-hidden rounded-3xl border border-light-gray bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg";

                return item.externalLink ? (
                  <motion.a
                    key={`${item.title}-${index}`}
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={cardClass}
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.article
                    key={`${item.title}-${index}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={cardClass}
                  >
                    {content}
                  </motion.article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
