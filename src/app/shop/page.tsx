"use client";
import React from "react";
import {
  ImageCard,
  List,
  StyledLoading,
  StyledShopMainPage,
} from "./list.style";
import { api } from "@/api/api";
import { Filters, Item } from "@/interfaces/item";
import { FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";
import Link from "next/link";
import { Loading } from "@/components/loadingCard/loading";

const ItemsPage = () => {
  const [list, setList] = React.useState<Item[]>([]);
  const monetaryValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const addToCart = (data: any) => {
    const dataCart = {
      id: data.id,
      name: data.name,
      price: data.price,
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

  const [filters, setFilters] = React.useState<Filters>(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      search: params.get("search") || "",
      type: params.get("type") || "",
      price: params.has("price") ? Number(params.get("price")) : 0,
    };
  });

  const filteredData = list.filter((item) => {
    return Object.keys(filters).every((filterName) => {
      const filterValue = filters[filterName as keyof Filters];
      if (filterName === "search") {
        return item.name
          .toLowerCase()
          .includes(filterValue.toString().toLowerCase());
      } else if (filterName === "type") {
        return filterValue === "" || item.type === filterValue;
      } else if (filterName === "price") {
        return Number(item.price) >= Number(filterValue);
      }
      return true;
    });
  });

  const handleFilterChange = (filterName: string, value: string | number) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const clearFilter = (filterName: string) => {
    if (filterName === "search") {
      const searchInput = document.getElementById("search") as HTMLInputElement;
      if (searchInput) {
        searchInput.value = "";
      }
    }
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: "",
    }));
  };

  React.useEffect(() => {
    const listOfItems = async () => {
      try {
        const { data } = await api.get("/items");
        setList(data);
      } catch (error) {
        console.log(error);
      }
    };
    listOfItems();
  }, []);

  React.useEffect(() => {
    const params = new URLSearchParams();
    const { search, type, price } = filters;

    if (search) {
      params.set("search", search);
    }
    if (type) {
      params.set("type", type);
    }
    if (price !== 0) {
      params.set("price", price.toString());
    }

    const queryString = params.toString();

    const url = queryString
      ? `${window.location.pathname}?${queryString}`
      : window.location.pathname;
    window.history.replaceState({}, "", url);
  }, [filters]);

  return (
    <StyledShopMainPage>
      <section className="shop-title">
        <div>
          <h1>Shop</h1>
          <p>
            <i>Here you can find the best of the items</i>
          </p>
        </div>
      </section>
      <section className="shop-panel">
        <section className="shop-filter">
          <label htmlFor="search" className="item-search">
            <p>Search:</p>
            <input
              type="text"
              id="search"
              onChange={(e) => handleFilterChange("search", e.target.value)}
              value={filters.search}
            />
            {filters.search && (
              <button
                className="clear-filter"
                onClick={() => clearFilter("search")}
              >
                X
              </button>
            )}
          </label>
          <div className="item-price">
            <label htmlFor="price">
              <p>Price:</p>
              <input
                type="range"
                min="0"
                max="200"
                step="10"
                value={filters.price}
                onChange={(e) =>
                  handleFilterChange("price", parseInt(e.target.value, 10))
                }
              />
            </label>
          </div>
          <div className="item-type">
            {["Cap", "Hoodie", "Shirt", "Shoes", "Trousers"].map((type) => (
              <label key={type}>
                <p>{type}</p>
                <input
                  type="radio"
                  value={type}
                  checked={filters.type === type}
                  onChange={() => handleFilterChange("type", type)}
                />
              </label>
            ))}
            {filters.type && (
              <button
                className="clear-filter"
                onClick={() => clearFilter("type")}
              >
                X
              </button>
            )}
          </div>
        </section>
        <List>
          {list.length !== 0 ? (
            filteredData.map((item) => (
              <li key={item.id}>
                <ImageCard bgData={item.url_image[0]}>
                  <div className="buttons-list">
                    <button id="button-1">
                      <Link href={`/shop/${item.id}`}>Check it out</Link>
                    </button>
                    <button onClick={() => addToCart(item)} id="button-2">
                      Add to cart
                    </button>
                  </div>
                </ImageCard>
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
          ) : (
            <StyledLoading>
              <section>
                <div className="L">L</div>
                <div className="o">o</div>
                <div className="a">a</div>
                <div className="d">d</div>
                <div className="i">i</div>
                <div className="n">n</div>
                <div className="g">g</div>
                <div className="p1">.</div>
                <div className="p2">.</div>
                <div className="p3">.</div>
              </section>
            </StyledLoading>
          )}
        </List>
      </section>
    </StyledShopMainPage>
  );
};

export default ItemsPage;
