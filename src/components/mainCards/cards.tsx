"use client";
import * as style from "./cards.style";
import { api } from "@/api/api";
import { CartItem, Item } from "@/interfaces/item";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Loading } from "../loadingCard/loading";

export const MainCards = () => {
  const [list, setList] = React.useState<Item[]>([]);
  const monetaryValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const addToCart = (data: any) => {
    const dataCart: CartItem = {
      id: data.id,
      name: data.name,
      price: Number(data.price),
      type: data.type,
      quantity: 1,
      image: data.url_image[0],
      size: data.sizes[0],
      sex: data.sex ? data.sex : "Unissex",
    };
    if (typeof window !== "undefined") {
      let listCart = window.localStorage.getItem("@CartList");
      let cartList = [];
      if (listCart) {
        cartList = JSON.parse(listCart);
      }
      const foundItem = cartList.find((it: any) => it.id === dataCart.id);
      if (!foundItem) {
        cartList.push(dataCart);
        toast.info("Item added to the cart");
      } else {
        toast.info("Item already on the cart");
      }
      window.localStorage.setItem("@CartList", JSON.stringify(cartList));
    }
  };

  React.useEffect(() => {
    const selectedItems = async () => {
      try {
        const allItems = await api.get("/items");
        setList([
          allItems.data[4],
          allItems.data[12],
          allItems.data[18],
          allItems.data[25],
          allItems.data[34],
          allItems.data[41],
          allItems.data[44],
          allItems.data[42],
          allItems.data[50],
          allItems.data[60],
        ]);
      } catch (error) {
        console.log(error);
      }
    };
    selectedItems();
  }, []);

  return (
    <>
      {list.length !== 0 ? (
        <style.List>
          {list.length !== 0
            ? list.map((item) => (
                <li key={item.id}>
                  <style.ImageCard $bgdata={item.url_image[0]}>
                    <div className="buttons-list">
                      <button id="button-1">
                        <Link href={`/shop/${item.id}`}>Check it out</Link>
                      </button>
                      <button onClick={() => addToCart(item)} id="button-2">
                        Add to cart
                      </button>
                    </div>
                  </style.ImageCard>
                  <h3>{item.name}</h3>
                  <p className="item-type">{item.type}</p>
                  <p>
                    <i>{item.sex ? item.sex : null}</i>
                  </p>
                  <div className="item-rating">
                    {[...Array(5)].map((star, index) => (
                      <div
                        className={index <= item.rate - 1 ? "on" : "off"}
                        key={index}
                      >
                        <FaStar />
                      </div>
                    ))}
                  </div>
                  <p>{monetaryValue.format(item.price)}</p>
                </li>
              ))
              : null}
              </style.List>
      ) : (
        <Loading />
      )}
    </>
  );
};
