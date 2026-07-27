'use client';

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group w-full min-w-0 cursor-pointer"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={post.image}
          alt={post.imageAlt || post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-3.5 left-3.5">
          <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-white uppercase shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-7 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gray-400 text-[11px] font-bold uppercase tracking-wider">
            {post.readTime}
          </span>
        </div>
        <h3 className="font-display text-base sm:text-lg mb-3 group-hover:text-secondary cursor-pointer transition-colors leading-snug font-bold text-gray-900 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-500 font-body text-xs sm:text-sm mb-6 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-auto border-t border-gray-100 pt-4 flex justify-between items-center">
          <span className="text-gray-400 text-xs font-bold">{post.date}</span>
          <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform text-lg">
            north_east
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
