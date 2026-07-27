import React from 'react';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden border border-outline-variant/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
      <div className="aspect-[3/2] overflow-hidden relative">
        <img
          src={post.image}
          alt={post.imageAlt || post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-primary uppercase shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">
            {post.readTime}
          </span>
        </div>
        <h3 className="font-display text-xl mb-4 hover:text-secondary cursor-pointer transition-colors leading-snug font-bold">
          {post.title}
        </h3>
        <p className="text-on-surface-variant font-body text-sm mb-6 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-auto border-t border-outline-variant/10 pt-4 flex justify-between items-center">
          <span className="text-on-surface-variant text-xs font-bold">{post.date}</span>
          <span className="material-symbols-outlined text-secondary hover:translate-x-1 transition-transform cursor-pointer text-xl">
            north_east
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
