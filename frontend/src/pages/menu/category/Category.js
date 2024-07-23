import React from 'react';
import { useParams } from 'react-router-dom';
import categories from '../../../data/Categories';
import Card from './components/Card';

export default function Category() {
  const { slug } = useParams();
  const category = categories.find(item => item.slug === slug);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <div className='container container-lg pb-48'>
        <div className="text-center pt-20">
          <p className="text-xl underline tracking-tight text-gray-900 lg:text-5xl">
            {category.name}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {category.description}
          </p>
        </div>
        <Card slug={slug} />
      </div>
    </div>
  );
}
