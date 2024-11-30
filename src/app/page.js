import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          mainHeader={'Về chúng tôi'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Food TP là một thiên đường ẩm thực toạ lạc tại quận Tân Bình, Thành phố Hồ Chí Minh. Chúng tôi tự hào mang đến cho thực khách những trải nghiệm ẩm thực đa dạng, từ các món ăn truyền thống Việt Nam đến các hương vị quốc tế hấp dẫn. Với không gian ấm cúng và phong cách phục vụ chuyên nghiệp, Food TP là điểm đến lý tưởng cho những bữa ăn gia đình, gặp gỡ bạn bè hay các dịp đặc biệt. Hãy đến và khám phá sự tinh tế trong từng món ăn tại Food TP – nơi ẩm thực và niềm vui hội tụ. </p>

        </div>
      </section>
    </>
  )
}
