import AddToCartButton from "@/components/menu/AddToCartButton";

export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, description, name, basePrice,
    sizes, extraIngredientPrices,
  } = item;
  const hasSizesOrExtras = sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div className="flex flex-col bg-green-100 px-2 pt-2 pb-4 rounded-lg text-center
      group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all min-h-[350px]">
      <div className="text-center h-[60%]">
        <img src={image} className="block mx-auto w-full h-full object-cover" alt="pizza" />
      </div>
      <div className="h-[40%]">

        <h4 className="font-semibold text-xl my-3">{name}</h4>
        <p className="text-gray-500 text-sm line-clamp-3">
          {description}
        </p>
        <AddToCartButton
          image={image}
          hasSizesOrExtras={hasSizesOrExtras}
          onClick={onAddToCart}
          basePrice={basePrice}
        />
      </div>
    </div>
  );
}