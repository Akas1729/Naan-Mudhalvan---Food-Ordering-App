import React from 'react';
import { Category } from '../types';

interface CategoryListProps {
  categories: Category[];
  onSelectCategory: (categoryId: number) => void;
}

export default function CategoryList({ categories, onSelectCategory }: CategoryListProps) {
  return (
    <div className="flex gap-4 overflow-x-auto py-4 px-2 no-scrollbar">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
            category.active
              ? 'bg-orange-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}