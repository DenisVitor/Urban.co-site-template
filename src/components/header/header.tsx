"use client";
import { StyledHeader } from "./header.style";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import React from "react";
import { Modal } from "../modal/modal";
import {
  InputRegister,
  LabelRegister,
  ToggleModal,
} from "./modalLoginRegister/loginRegister.style";
import { StyledCart } from "./cart/cart.style";
import { api } from "@/api/api";
import { toast } from "react-toastify";
import { deleteCookie, hasCookie, setCookie } from "cookies-next";
import { useForm } from "react-hook-form";
import {
  LoginSchema,
  RegisterSchema,
} from "./modalLoginRegister/loginRegister.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { enforceFormat, formatToPhone } from "./modalLoginRegister/formatPhone";
import { IconAuth } from "./authIcon";
import { CartItem } from "@/interfaces/item";
import { IoReorderThree } from "react-icons/io5";

export const Header = () => {
  const [login, setLogin] = React.useState<boolean>(false);
  const [toggle, setToggle] = React.useState<boolean>(true);
  const [cart, setCart] = React.useState<boolean>(false);
  const [list, setList] = React.useState<CartItem[] | []>([]);
  const [total, setTotal] = React.useState<number>(0);
  const [responsive, setResponsive] = React.useState<boolean>(false);

  const calculateTotal = (items: CartItem[]) => {
    let totalPrice = 0;
    items.forEach((item: CartItem) => {
      totalPrice += item.price;
    });
    if (typeof window !== "undefined") {
      window.localStorage.setItem("@TotalPrice", JSON.stringify(totalPrice));
    }
    if (items.length === 0) {
      setTotal(0);
    }
    return totalPrice;
  };

  const getList = () => {
    if (typeof window !== "undefined") {
      let cartList = window.localStorage.getItem("@CartList");
      if (cartList) {
        let parsedCartList = JSON.parse(cartList);
        setList(parsedCartList);
        let totalPrice = calculateTotal(parsedCartList);
        if (totalPrice) {
          let priceTotal = window.localStorage.getItem("@TotalPrice");
          if (priceTotal) {
            let parsedTotal = JSON.parse(priceTotal);
            setTotal(parsedTotal);
          }
        }
      } else {
        setList([]);
        setTotal(0);
      }
    }
  };

  const handleList = () => {
    setCart(true);
    getList();
  };

  const remove = (id: string) => {
    if (typeof window !== "undefined") {
      let cartList = window.localStorage.getItem("@CartList");
      let newList = [];
      if (cartList) {
        newList = JSON.parse(cartList);
        newList = newList.filter((item: CartItem) => item.id !== id);
        setList(newList);
        let totalPrice = calculateTotal(newList);
        if (newList.lenght === 0) {
          setTotal(0);
        }
        if (totalPrice) {
          let priceTotal = window.localStorage.getItem("@TotalPrice");
          if (priceTotal) {
            let parsedTotal = JSON.parse(priceTotal);
            setTotal(parsedTotal);
          }
        }
        window.localStorage.setItem("@CartList", JSON.stringify(newList));
      }
    }
  };

  const increase = (id: string) => {
    if (typeof window !== "undefined") {
      let listCart = window.localStorage.getItem("@CartList");
      if (listCart) {
        let parsedListCart: any[] = JSON.parse(listCart);
        let foundItemIndex = parsedListCart.findIndex(
          (it: CartItem) => it.id === id
        );
        if (foundItemIndex !== -1) {
          let foundItem: CartItem = parsedListCart[foundItemIndex];
          let newQuantity = foundItem.quantity + 1;
          if (newQuantity <= 10) {
            foundItem.quantity = newQuantity;
            foundItem.price =
              (foundItem.price / (newQuantity - 1)) * newQuantity;
            parsedListCart[foundItemIndex] = foundItem;
            window.localStorage.setItem(
              "@CartList",
              JSON.stringify(parsedListCart)
            );
            setList(parsedListCart);
            let totalPrice = calculateTotal(parsedListCart);
            if (totalPrice) {
              let priceTotal = window.localStorage.getItem("@TotalPrice");
              if (priceTotal) {
                let parsedTotal = JSON.parse(priceTotal);
                setTotal(parsedTotal);
              }
            }
          }
        }
      }
    }
  };

  const decrease = (id: string) => {
    if (typeof window !== "undefined") {
      let listCart = window.localStorage.getItem("@CartList");
      if (listCart) {
        let parsedListCart: any[] = JSON.parse(listCart);
        let foundItemIndex = parsedListCart.findIndex(
          (it: CartItem) => it.id === id
        );
        if (foundItemIndex !== -1) {
          let foundItem: CartItem = parsedListCart[foundItemIndex];
          let newQuantity = foundItem.quantity - 1;
          if (newQuantity >= 1) {
            foundItem.quantity = newQuantity;
            foundItem.price =
              (foundItem.price / (newQuantity + 1)) * newQuantity;
            parsedListCart[foundItemIndex] = foundItem;
            window.localStorage.setItem(
              "@CartList",
              JSON.stringify(parsedListCart)
            );
            setList(parsedListCart);
            let totalPrice = calculateTotal(parsedListCart);
            if (totalPrice) {
              let priceTotal = window.localStorage.getItem("@TotalPrice");
              if (priceTotal) {
                let parsedTotal = JSON.parse(priceTotal);
                setTotal(parsedTotal);
              }
            }
          }
        }
      }
    }
  };

  const buy = () => {
    setList([]);
    setTotal(0);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("@CartList", JSON.stringify([]));
      window.localStorage.setItem("@TotalPrice", JSON.stringify(0));
    }
    toast.success("Thanks for buying with us");
  };

  const RegisterHooks = useForm({
    resolver: zodResolver(RegisterSchema),
  });
  const LoginHooks = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const registerFunc = async (registerData: any) => {
    try {
      await api.post("/clients", registerData);
      toast.success("User created with success");
      setTimeout(() => {
        setToggle(false);
      }, 2000);
    } catch (err) {
      toast.error(`Something went wrong `);
      console.log(err);
    }
  };

  const loginFunc = async (loginData: any) => {
    try {
      const { data } = await api.post("/login", loginData);
      setCookie("@UserToken", data.token, {
        maxAge: 60 * 30,
      });
      toast.success("User logged with success");
      setTimeout(() => {
        setLogin(false);
      }, 1500);
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  const logout = () => {
    deleteCookie("@UserToken");
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <StyledHeader>
      <Link href="/">
        <h2>
          <span>U</span>
          <span>r</span>
          <span>b</span>
          <span>a</span>
          <span>n</span>
          <span>.</span>
          <span>c</span>
          <span>o</span>
        </h2>
      </Link>
      <nav>
        <ul className="button-list">
          <li>
            <Link href="/shop">
              <p>Shop</p>
            </Link>
          </li>
          {["Cap", "Hoodie", "Shoes", "Shirt", "Trousers"].map((type) => (
            <li key={type}>
              <a key={type} href={`/shop?type=${type}`}>
                <p>{type}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="svg-list">
        <div>
          <Link href="/about">
            <FaBook fill="currentColor" />
          </Link>
        </div>
        <div>
          <Link href="/contact">
            <FaPhoneVolume fill="currentColor" />
          </Link>
        </div>
        <IconAuth logout={logout} setLogin={setLogin} />
        <div onClick={handleList}>
          <IoMdCart title="Cart" fill="currentColor" className="svg-up" />
        </div>
      </div>
      <div
        onClick={() => setResponsive(true)}
        className="responsive-header_menu svg-up"
      >
        <IoReorderThree />
      </div>
      <Modal modal={responsive} setModal={setResponsive}>
        <div
          className={`svg-list_responsive ${responsive ? "res-active" : ""}`}
        >
          <div className="svg-responsive_title">
            <h1>Menu</h1>
            <button onClick={() => setResponsive(false)}>X</button>
          </div>
          <div className="svg-responsive_items">
            <div>
              <Link href="/about">
                <FaBook fill="currentColor" />
                <p>About</p>
              </Link>
            </div>
            <div>
              <Link href="/contact">
                <FaPhoneVolume fill="currentColor" />
                <p>Contact</p>
              </Link>
            </div>
            <div>
              <IconAuth logout={logout} setLogin={setLogin} />
              <p onClick={() => setLogin(true)}>
                {hasCookie("@UserToken") ? "Logout" : "Login"}
              </p>
            </div>
            <div onClick={handleList}>
              <IoMdCart title="Cart" fill="currentColor" className="svg-up" />
              <p>Cart</p>
            </div>
          </div>
        </div>
      </Modal>
      <Modal modal={login} setModal={setLogin}>
        <ToggleModal>
          <div className={`${login ? "login-activated" : ""}`}>
            <div className="toggle-login_register">
              <button
                className={toggle ? "toggled" : ""}
                onClick={() => setToggle(true)}
              >
                Register
              </button>
              <button
                className={toggle ? "" : "toggled"}
                onClick={() => setToggle(false)}
              >
                Login
              </button>
              <button
                className="login-close_button"
                onClick={() => setLogin(false)}
              >
                Close
              </button>
            </div>
            <form
              action=""
              className={`${toggle ? "active" : ""} login-register`}
              onSubmit={RegisterHooks.handleSubmit((e) => {
                registerFunc(e);
              })}
            >
              <div className="register-wrapper">
                <LabelRegister htmlFor="name">Name</LabelRegister>
                <InputRegister
                  type="text"
                  id="name"
                  {...RegisterHooks.register("name")}
                />
              </div>
              <div className="register-wrapper">
                <LabelRegister htmlFor="email">Email</LabelRegister>
                <InputRegister
                  type="text"
                  id="email"
                  {...RegisterHooks.register("email")}
                />
              </div>
              <div className="register-wrapper">
                <LabelRegister htmlFor="phone">Phone</LabelRegister>
                <InputRegister
                  type="text"
                  id="email"
                  onKeyDown={(e) => enforceFormat(e)}
                  onKeyUp={(e) => formatToPhone(e)}
                  {...RegisterHooks.register("phone")}
                />
              </div>
              <div className="register-wrapper">
                <LabelRegister htmlFor="password">Password</LabelRegister>
                <InputRegister
                  type="text"
                  id="password"
                  {...RegisterHooks.register("password")}
                />
              </div>
              <div className="register-wrapper">
                <LabelRegister htmlFor="confirm">Confirm</LabelRegister>
                <InputRegister
                  type="text"
                  id="confirm"
                  {...RegisterHooks.register("confirm")}
                />
              </div>
              <button>Sign up</button>
            </form>
            <form
              onSubmit={LoginHooks.handleSubmit((e) => loginFunc(e))}
              className={`${toggle ? "" : "active"} login-login`}
            >
              <div className="register-wrapper">
                <LabelRegister htmlFor="email">Email</LabelRegister>
                <InputRegister
                  {...LoginHooks.register("email")}
                  type="text"
                  id="email"
                />
              </div>
              <div className="register-wrapper">
                <LabelRegister htmlFor="password">Password</LabelRegister>
                <InputRegister
                  {...LoginHooks.register("password")}
                  type="text"
                  id="password"
                />
              </div>
              <button>Sign in</button>
            </form>
          </div>
        </ToggleModal>
      </Modal>
      <Modal modal={cart} setModal={setCart}>
        <StyledCart>
          <div className={`${cart ? "cart-activated" : "cart-deactivated"}`}>
            <div className="cart-title">
              <h2>Shopping cart</h2>
              <div className="cart-total">
                <p>
                  Total price: <span>${Number(total).toFixed(1)}</span>
                </p>
                <button onClick={() => buy()} className="cart-final_button">
                  Buy now
                </button>
              </div>
              <button className="close-cart" onClick={() => setCart(false)}>
                X
              </button>
            </div>
            <div className="cart-title_responsive">
              <div className="responsive-title">
                <h2>Shopping cart</h2>
                <button className="close-cart" onClick={() => setCart(false)}>
                  X
                </button>
              </div>
              <div className="cart-total">
                <p>
                  Total price: <span>${Number(total).toFixed(1)}</span>
                </p>
                <button onClick={() => buy()} className="cart-final_button">
                  Buy now
                </button>
              </div>
            </div>
            <div className="cart-data">
              {list.length > 0 ? (
                list.map((el) => (
                  <div className="item-cart" key={el.id}>
                    <img className="img-cart" src={el.image} alt={el.name} />
                    <h4>{el.name}</h4>
                    <p className="item-quantity">
                      <span
                        className="item-quantity_counter"
                        onClick={() => increase(el.id!)}
                      >
                        +
                      </span>
                      <span className="item-quantity_number">
                        {el.quantity}
                      </span>
                      <span
                        className="item-quantity_counter"
                        onClick={() => decrease(el.id!)}
                      >
                        -
                      </span>
                    </p>
                    <p>{el.size}</p>
                    <p className="item-sex">{el.sex ? el.sex : "Unissex"}</p>
                    <p className="item-price">${Number(el.price).toFixed(1)}</p>
                    <button
                      className="item-remover"
                      onClick={() => remove(el.id!)}
                    >
                      X
                    </button>
                  </div>
                ))
              ) : (
                <div className="cart-data_empty">
                  <h2>It seems empty</h2>
                  <p>Please add more items on the cart</p>
                </div>
              )}
            </div>
          </div>
        </StyledCart>
      </Modal>
    </StyledHeader>
  );
};
