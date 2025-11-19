'use client';

import { useMenuQuery } from '@/hooks/use-menu-query';
import { useDeleteMenuMutation } from '@/hooks/use-delete-menu-mutation';
import { useState } from 'react';

const AdminMenuPage = () => {
  const { data: menuList, isLoading } = useMenuQuery();
  const { mutateAsync: deleteDish } = useDeleteMenuMutation();

  const [editItem, setEditItem] = useState<any | null>(null);

  if (isLoading) return <p>Ładowanie menu...</p>;
  const handleButtonDelete = async (id: string) => {
    await deleteDish(id);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Zarządzanie menu</h1>

      <button
        onClick={() => setEditItem({})}
        className="bg-black text-white px-4 py-2 rounded-lg mb-4 hover:bg-gray-700"
      >
        ➕ Dodaj potrawę
      </button>

      <div className="space-y-4">
        {menuList?.data?.menuList.map((dish: any) => (
          <div key={dish.id} className="p-4 border rounded-xl flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{dish.name}</p>
              <p className="text-sm text-gray-600">{dish.category}</p>
              <p className="font-bold">{dish.price} zł</p>
            </div>

            <div className="flex gap-2">
              <button onClick={() => setEditItem(dish)} className="px-3 py-2 bg-blue-500 text-white rounded-lg">
                ✏ Edytuj
              </button>
              <button
                onClick={() => handleButtonDelete(dish.id)}
                className="px-3 py-2 bg-red-600 text-white rounded-lg"
              >
                🗑 Usuń
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMenuPage;
