import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold text-green-600">
          <div className="text-[4rem] font-viet-co-trang line leading-[3rem] text-green-600">Khám phá <div className="text-center text-[3rem]">hương vị Việt</div>
            <div className="text-green-900 text-[2.2rem] text-start">chạm đến trái tim.</div> </div>

        </h1>
        <p className="my-6 text-gray-500 text-sm">
          &nbsp;&nbsp;&nbsp;&nbsp;Ẩm thực Việt Nam là sự hòa quyện tinh tế giữa các hương vị truyền thống và nguyên liệu tươi ngon. Mỗi món ăn đều mang đậm dấu ấn vùng miền, từ vị phở Bắc đậm đà đến hương vị bún bò Huế cay nồng. Các món ăn không chỉ hấp dẫn bởi hương vị mà còn bởi cách trình bày bắt mắt và tinh tế. Ẩm thực Việt Nam thật sự là một hành trình khám phá thú vị cho mọi thực khách.        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-green-700 uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Lên đơn
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Xem thêm
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/hero-amthuc-mi.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>
    </section>
  );
}