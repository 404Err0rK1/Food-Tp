'use client';
import {CartContext, cartProductPrice} from "@/components/AppContext";
import AddressInputs from "@/components/layout/AddressInputs";
import SectionHeaders from "@/components/layout/SectionHeaders";
import CartProduct from "@/components/menu/CartProduct";
import {useParams} from "next/navigation";
import {useContext, useEffect, useState} from "react";

export default function OrderPage() {
  const {clearCart} = useContext(CartContext);
  const [order, setOrder] = useState();
  const [loadingOrder, setLoadingOrder] = useState(true);
  const {id} = useParams();
  useEffect(() => {
    if (typeof window.console !== "undefined") {
      if (window.location.href.includes('clear-cart=1')) {
        clearCart();
      }
    }
    if (id) {
      setLoadingOrder(true);
      fetch('/api/orders?_id='+id).then(res => {
        res.json().then(orderData => {
          setOrder(orderData);
          setLoadingOrder(false);
        });
      })
    }
  }, []);

  let subtotal = 0;
  if (order?.cartProducts) {
    for (const product of order?.cartProducts) {
      subtotal += cartProductPrice(product);
    }
  }

  return (
    <section className="max-w-2xl mx-auto mt-8">
      <div className="text-center">
        <SectionHeaders mainHeader="Đơn hàng của bạn" />
        <div className="mt-4 mb-8">
          <p>Cảm ơn bạn đã đặt thực đơn</p>
          <p>Chúng tôi sẽ thông báo với bạn khi thực đơn được vận chuyển.</p>
        </div>
      </div>
      {loadingOrder && (
        <div>Đang tải...</div>
      )}
      {order && (
        <div className="grid md:grid-cols-2 md:gap-16">
          <div>
            {order.cartProducts.map(product => (
              <CartProduct key={product._id} product={product} />
            ))}
            <div className="text-right py-2 text-gray-500">
              Giá thực đơn:&nbsp;
              <span className="text-black font-bold inline-block w-8 whitespace-nowrap">{subtotal} &#8363;</span>
              <br />
              Phí vận chuyển:&nbsp;
              <span className="text-black font-bold inline-block w-8 whitespace-nowrap">10.000 &#8363;</span>
              <br />
              Thanh toán: &nbsp;
              <span className="text-black font-bold inline-block w-8 whitespace-nowrap">
                {(subtotal + 10000).toLocaleString('vi-VN')} &#8363;
              </span>
            </div>
          </div>
          <div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <AddressInputs
                disabled={true}
                addressProps={order}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}