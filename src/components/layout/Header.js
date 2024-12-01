'use client';
import { CartContext } from "@/components/AppContext";
import Bars2 from "@/components/icons/Bars2";
import ShoppingCart from "@/components/icons/ShoppingCart";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

function AuthLinks({ status, userName }) {
  // console.log(status + "test");
  
  if (status === 'authenticated') {
    return (
      <>
        <Link href={'/profile'} className="whitespace-nowrap">
          Chào, {userName}
        </Link>
        <button
          onClick={() => signOut()}
          className="bg-green-700 rounded-full text-white px-8 py-2">
          Đăng xuất
        </button>
      </>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <>
        <Link href={'/login'} className="bg-green-700 rounded-full text-white px-4 py-2">Đăng nhập</Link>
        <Link href={'/register'} className="bg-green-700 rounded-full text-white px-6 py-2">
          Đăng ký
        </Link>
      </>
    );
  }
}

export default function Header() {
  const session = useSession();
  const status = session?.status;
  // console.log(session); // check session
  
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email.substring(0, userData.email.indexOf("@"));
  const { cartProducts } = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }
  return (
    <header>
      <div className="flex items-center md:hidden justify-between">
        <Link className="text-green-700 font-bremlin text-2xl" href={'/'}>
          FOOD TP
        </Link>
        <div className="flex gap-8 items-center">
          <Link href={'/cart'} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
          <button
            className="p-1 border"
            onClick={() => setMobileNavOpen(prev => !prev)}>
            <Bars2 />
          </button>
        </div>
      </div>
      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center">
          <Link href={'/'}>Trang chủ</Link>
          <Link href={'/menu'}>Thực đơn</Link>
          <Link href={'/#about'}>Chúng tôi</Link>
          <Link href={'/#contact'}>Liên hệ</Link>
          <AuthLinks status={status} userName={userName} />
        </div>
      )}
      <div className="hidden md:flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link className="text-green-700 font-semibold text-2xl flex flex-row gap-1 justify-center items-center" href={'/'}>
            <Image
              src='/hero-amthuc-mon-11.png'
              alt="logo"
              width={70}
              height={70}
            />
            <span className="inline-block text-2xl font-bremlin translate-y-1">
              Food TP
            </span>
          </Link>
          <Link className="hover:text-green-700" href={'/'}>Trang chủ</Link>
          <Link className="hover:text-green-700" href={'/menu'}>Thực đơn</Link>
          <Link className="hover:text-green-700" href={'/#about'}>Chúng tôi</Link>
          <Link className="hover:text-green-700" href={'/#contact'}>Liên hệ</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          <AuthLinks status={status} userName={userName} />
          <Link href={'/cart'} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}