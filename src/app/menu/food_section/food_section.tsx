'use client';

import { useState, useEffect } from 'react';
import { useMenuQuery } from '@/hooks/use-menu-query';

const FoodSection = () => {
  const { data, isLoading, error } = useMenuQuery();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);

  useEffect(() => {
    if (data?.data?.menuList) {
      const dishes = data.data.menuList;
      const categories = [...new Set(dishes.map((dish: any) => dish.category))] as string[];
      setUniqueCategories(categories);

      if (!selectedCategory && categories.length > 0) {
        setSelectedCategory(categories[0]);
      }
    }
  }, [data, selectedCategory]);

  if (isLoading) return <p className="text-center mt-10">Ładowanie...</p>;

  if (error) return <p className="text-center mt-10 text-red-500">Błąd ładowania menu</p>;

  const dishes = data?.data?.menuList ?? [];
  const filtered = dishes.filter((dish: any) => dish.category === selectedCategory);

  return (
    <main className="w-full flex min-h-screen bg-gray-100 pt-20">
      <aside className="w-64 bg-white shadow-2xl rounded-xl p-5 mx-3 mb-5 mt-10 flex flex-col gap-3 ">
        <h2 className="text-xl font-bold mb-3">MENU</h2>

        {uniqueCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-left px-3 py-2 rounded-lg transition ${
              selectedCategory === cat ? 'bg-black text-white' : 'hover:bg-gray-200'
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </aside>

      <section className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-6">{selectedCategory?.toUpperCase()}</h2>

        {filtered.length === 0 && <p className="text-gray-500 text-lg italic mt-6">Brak potraw w tej kategorii.</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((dish: any) => (
            <div key={dish.id} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{dish.name}</h3>
                <span className="text-lg font-semibold">{dish.price} zł</span>
              </div>

              <p className="text-gray-600">{dish.description}</p>

              {dish.vegetarian && (
                <span className="text-green-600 text-sm font-semibold mt-2 block">Wegetariańskie</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FoodSection;
