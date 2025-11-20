'use client';

import { useMenuQuery } from '@/hooks/use-menu-query';
import { useDeleteMenuMutation } from '@/hooks/use-delete-menu-mutation';
import { useState } from 'react';
import AddEditDishModal from '../menu/AddEditDishModal';
import { useRouter } from 'next/navigation';

const AdminMenuPage = () => {
  const router = useRouter();
  const { data: menuList, isLoading } = useMenuQuery();
  const { mutateAsync: deleteDish } = useDeleteMenuMutation();

  const [editItem, setEditItem] = useState<any | null>(null);

  if (isLoading) return <p className="text-center">Ładowanie menu...</p>;

  const handleButtonDelete = async (id: string) => {
    await deleteDish(id);
  };

  const handleCloseModal = () => {
    setEditItem(null);
  };

  const handleOrder = () => {
    router.push('/admin_reservation');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 mt-5">Reserwacje</h1>
      <button
        className="bg-black text-white px-4 py-2 rounded-lg mb-4 justify-center  hover:bg-gray-700"
        onClick={handleOrder}
      >
        Zobacz reserwacje
      </button>
      <h1 className="text-3xl font-bold mb-6 mt-5">Zarządzanie menu</h1>

      <button
        onClick={() => setEditItem({})}
        className="bg-black text-white px-4 py-2 rounded-lg mb-4 justify-center  hover:bg-gray-700"
      >
        ➕ Dodaj potrawę
      </button>

      <div className="space-y-4 mt-4">
        {menuList?.data?.menuList.map((dish: any) => (
          <div key={dish.id} className="p-4 border rounded-xl flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{dish.name}</p>
              <p className="text-sm text-gray-600">{dish.category}</p>
              <p className="font-bold">{dish.price} zł</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleButtonDelete(dish.id)}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Usuń
              </button>

              <button onClick={() => setEditItem(dish)} className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
                Edytuj
              </button>
            </div>
          </div>
        ))}
      </div>

      {editItem && <AddEditDishModal item={editItem} onClose={handleCloseModal} />}
    </div>
  );
};

export default AdminMenuPage;
