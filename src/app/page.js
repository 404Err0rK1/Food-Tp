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
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Going to the restaurant is a great opportunity to enjoy the best foods which are made by the best chefs. We can not only enjoy our traditional food but also other countries’ food. One of my favorite restaurants is a Korean restaurant called TPFOOD. I used to come here twice with my coworker and I was impressed a lot. I am a Korean foodaholic so my friends recommended this restaurant for me. It is located on the 7th floor of a shopping mall in the Cong Hoa District in HCM.
          </p>
          <p>This is a buffet restaurant so I can taste all kinds of Korean foods here. They were all hot and spicy but I felt really satisfied with the quality of the food. Because this restaurant let us serve free soft drinks ourselves, so I didn’t have to worry about enjoying spicy food. What I love about this restaurant was the way the staff helped us to mix the sauces. They were kind and friendly so I felt welcomed here. The price was affordable and not too expensive for the tasty food. That’s why this restaurant is always crowded. If you are into Korean food, this restaurant will not disappoint you. </p>
          
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-green-500" href="tel:+46738123123">
            +84 36 237 6514
          </a>
        </div>
      </section>
    </>
  )
}
