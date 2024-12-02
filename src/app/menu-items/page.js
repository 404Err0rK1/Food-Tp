'use client';
import Right from "@/components/icons/Right";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MenuItemsPage() {

  const [menuItems, setMenuItems] = useState([]);
  const { loading, data } = useProfile();

  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setMenuItems(menuItems);
      });
    })
  }, []);

  if (loading) {
    return 'Đang tải thông tin...';
  }

  if (!data.admin) {
    return 'không phải là quản trị viên.';
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <Link
          className="button flex"
          href={'/menu-items/new'}>
          <span>Thêm món ăn mới vào thực đơn</span>
          <Right />
        </Link>
      </div>
      <div>
        <h2 className="text-sm text-gray-500 mt-8">Chỉnh sửa thông tin món ăn:</h2>
        <div className="grid grid-cols-3 gap-2">
          {menuItems?.length > 0 && menuItems.map(item => (
            <Link
              key={item._id}
              href={'/menu-items/edit/' + item._id}
              className="bg-gray-100 border border-gray-300 rounded-lg flex flex-col"
            >
              <div className="relative h-[75%]">
                <Image
                  className="rounded-sm object-cover"
                  src={item.image} alt={''} width={200} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="h-[25%]">
                <div className="text-center mt-2">
                  {item.name}
                </div>
                <div className="text-center text-sm text-gray-500">
                  {item.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}