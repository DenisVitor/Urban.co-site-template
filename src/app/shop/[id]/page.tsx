"use client";
import { api } from "@/api/api";
import { CartItem, SelectedItem } from "@/interfaces/item";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { FaStar } from "react-icons/fa";
import {
  CommentaryModal,
  CommentarySec,
  DeleteModal,
  ItemLoading,
  StyledItemMainPage,
  ToggleComponent,
} from "./item.style";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Modal } from "@/components/modal/modal";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { getCookie, hasCookie } from "cookies-next";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentarySchema } from "./schema/commentary.schema";
import { FaPenFancy } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Loading } from "@/components/loadingCard/loading";

const SelectedItemPage = ({ params }: { params: { id: string } }) => {
  const [item, setItem] = React.useState<SelectedItem>();
  const [activeButton, setActiveButton] = React.useState(true);
  const [comment, setComment] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string | undefined>("");
  const [counter, setCounter] = React.useState<number>(1);
  const [sizing, setSize] = React.useState<number>(0);
  const [commentList, setCommentList] = React.useState<any[]>();
  const [client, setClient] = React.useState<string>("");
  const [editComm, setEditComm] = React.useState<boolean>(false);
  const [deleteComm, setDeleteComm] = React.useState<boolean>(false);

  const commHooks = useForm({
    resolver: zodResolver(CommentarySchema),
  });
  const logged = hasCookie("@UserToken");

  const parseJwt = (token: string) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  };

  React.useEffect(() => {
    const hasBeenLogged = () => {
      if (logged) {
        const token = getCookie("@UserToken");
        const data = jwtDecode(String(token));
        const itemId = params.id;
        commHooks.setValue("itemId", itemId);
        commHooks.setValue("clientId", data.sub);
      }
    };
    hasBeenLogged();
  }, [logged]);

  const toggleContent = (buttonIndex: boolean) => {
    setActiveButton(!buttonIndex);
  };

  const increase = () => {
    if (item) {
      if (counter < item.quantity) {
        setCounter(counter + 1);
      }
    }
  };
  const decrease = () => {
    if (item) {
      if (counter > 1) {
        setCounter(counter - 1);
      }
    }
  };

  const addToCart = () => {
    const data: CartItem = {
      id: item?.id,
      name: item?.name,
      price: item ? Number(item.price * counter) : 0,
      type: item?.type,
      quantity: counter,
      image: image ? image : item?.url_image[0],
      size: sizing,
      sex: item?.sex ? item.sex : "Unissex",
    };

    if (typeof window !== "undefined") {
      let listCart = window.localStorage.getItem("@CartList");
      let cartList = [];
      if (listCart) {
        cartList = JSON.parse(listCart);
      }
      const foundItem = cartList.find((it: any) => it.id === data.id);
      if (!foundItem) {
        cartList.push(data);
        toast.info("Item added to the cart");
      } else {
        toast.info("Item already on the cart");
      }
      window.localStorage.setItem("@CartList", JSON.stringify(cartList));
    }
  };

  const meanNumbers = (numbers: number[]): number => {
    const sum = numbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const average = sum / numbers.length;
    return average;
  };

  let itemMeanAvarage = commentList
    ? meanNumbers(commentList!.map((num) => num.rating)).toFixed(1)
    : 2;

  const monetaryValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  if (typeof window !== "undefined") {
    React.useEffect(() => {
      const getItem = async () => {
        try {
          const { data } = await api.get(`/items/${params.id}`);
          setItem(data);
          setCommentList(data.commentaries);
        } catch (error) {
          console.log(error);
        }
      };
      getItem();
    }, []);
  }

  React.useEffect(() => {
    const hasLogged = () => {
      if (logged) {
        const token = getCookie("@UserToken");
        const clientData = parseJwt(String(token));
        setClient(clientData.sub);
      }
    };
    hasLogged();
  }, [logged]);

  const sendComment = async (dataComment: any) => {
    const token = getCookie("@UserToken");
    try {
      if (logged) {
        const { data }: any = await api.post(
          `/items/${params.id}/commentaries`,
          dataComment,
          {
            headers: {
              Authorization: `Bearer ${String(token)}`,
            },
          }
        );
        setComment(false);
        toast.success("Comment added");
        console.log(data);
        setCommentList([...commentList!, data]);
        itemMeanAvarage = meanNumbers(
          commentList!.map((num) => num.rating)
        ).toFixed(1);
        const clientData = parseJwt(String(token));
        setClient(clientData.sub);
      } else {
        toast.warning("You must been logged to comment");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editComment = async (editData: any) => {
    const token = getCookie("@UserToken");
    if (logged) {
      try {
        const { data } = await api.patch(
          `/items/${params.id}/commentaries`,
          editData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const { sub } = parseJwt(String(token));
        const updatedItem = commentList?.find(
          (it) => sub === it.clientId && params.id === it.itemId
        );
        if (editData.commentary) {
          updatedItem.commentary = data.commentary;
        }
        if (editData.rating) {
          updatedItem.rating = data.rating;
        }
        setEditComm(false);
        toast.success("Updated comment");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteComment = async () => {
    const token = getCookie("@UserToken");
    const { sub } = parseJwt(String(token));
    try {
      await api.delete(`/items/${params.id}/commentaries`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Comment deleted");
      const filteredList = commentList?.filter((it) => {
        if (it.clientId !== sub) {
          return true;
        }
      });
      setCommentList(filteredList);
      setDeleteComm(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      {item ? (
        <StyledItemMainPage>
          <div className="img-sec">
            <div className="img-list">
              {item
                ? item.url_image
                  ? item.url_image.map((img, indx) => (
                      <div key={img}>
                        <img
                          src={img}
                          alt="img-not working"
                          onClick={() => setImage(img)}
                          className={`${
                            img === image ? "selected" : "not-selected"
                          } img-item`}
                        />
                      </div>
                    ))
                  : null
                : null}
            </div>
            <div className="img-screen">
              <img
                className="img-screen_img"
                src={
                  image !== ""
                    ? image
                    : item
                    ? item.url_image
                      ? item?.url_image[0]
                      : image
                    : image
                }
                alt="img-not-work"
              />
            </div>
          </div>
          <div className="item-data">
            <div className="item-data_links">
              <i>
                <a href="/">home/</a>
                <a href="/shop">shop/</a>
                {item ? item.name : null}
              </i>
            </div>
            <h2 id="item-title">{item ? item.name : null}</h2>
            <h3 id="item-price">
              {item ? monetaryValue.format(item.price) : null}
            </h3>
            <p className="item-type">{item ? item.type : null}</p>
            <div className="item-rating">
              <p className="item-rating_reviews">
                (Reviews <span>{commentList ? commentList.length : null}</span>)
              </p>
              <div className="item-rating_stars">
                <p>{`${itemMeanAvarage}`}</p>
                {[...Array(5)].map((star, index) => (
                  <div
                    className={
                      item
                        ? index <= Number(itemMeanAvarage) - 1
                          ? "on"
                          : "off"
                        : ""
                    }
                    key={index}
                  >
                    <FaStar />
                  </div>
                ))}
              </div>
            </div>
            <p className="item-lorem">
              <i>
                <q>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  minus quam fugiat quaerat nisi alias qui veniam dicta? <br />
                  Beatae autem possimus itaque, dicta dignissimos cum fugiat
                  repellat ex nemo reiciendis?
                </q>
              </i>
            </p>
            <div className="item-size">
              <p className="item-size_text">
                Size:{" "}
                <span>
                  {sizing === 0 ? (item ? item.sizes[0] : null) : sizing}
                </span>
              </p>
              <div className="item-sizes_inputs">
                {item
                  ? item.sizes
                    ? item.sizes.map((size) => (
                        <label
                          key={size}
                          htmlFor={`${size}`}
                          className={size === sizing ? "marked" : ""}
                        >
                          <p>{size}</p>
                          <input
                            type="radio"
                            name={size.toString()}
                            id={size.toString()}
                            onClick={() => setSize(size)}
                          />
                        </label>
                      ))
                    : null
                  : null}
              </div>
            </div>
            <div className="item-counter">
              <p className="item-counter_text">
                Quantity: <span>{counter}</span>
              </p>
              <div>
                <span id="plus" onClick={increase}>
                  +
                </span>
                <span id="value">{counter}</span>
                <span id="minus" onClick={decrease}>
                  -
                </span>
              </div>
            </div>
            <button onClick={addToCart} className="buy-button">
              Add to Cart
            </button>
            <div className="item-categories">
              <p>
                On stock: <span>Yes</span>
              </p>
              <p>
                Category:{" "}
                <span>{item ? (item.sex ? item.sex : "Unissex") : null}</span>
              </p>
            </div>
          </div>
        </StyledItemMainPage>
      ) : (
        <ItemLoading>
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
        </ItemLoading>
      )}
      <ToggleComponent>
        <div className="button-container">
          <button
            className={activeButton ? "activated" : ""}
            onClick={() => toggleContent(false)}
            id="button-right"
          >
            Description
          </button>
          <button
            className={activeButton ? "" : "activated"}
            onClick={() => toggleContent(true)}
            id="button-left"
          >
            Commentaries
          </button>
        </div>
        <div className={`content-container  ${activeButton ? "active" : ""}`}>
          <div className="content content-desc">
            <h1 id="lorem-title">
              <span className="about-title_line"></span>
              Description
              <span className="about-title_line"></span>
            </h1>
            <div className="content-desc_one">
              <h2>Product description</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                reiciendis illo inventore repellendus maiores animi modi nemo
                labore nulla debitis nesciunt facere ea, enim ad, quas provident
                ab sequi ratione.
                <br /> Consequatur laudantium autem pariatur dolor hic.
                Voluptatem natus reiciendis culpa earum debitis molestias maxime
                modi obcaecati doloribus vitae cum veritatis quam, animi tempore
                pariatur dicta architecto?
                <br /> Temporibus repellat minima optio? Commodi atque unde
                earum iusto ipsam perspiciatis ducimus maxime fugit dolores
                quidem.
                <br /> Corporis totam iure, laborum accusamus possimus odio
                earum consectetur magni quibusdam dolorum ab atque dolor neque
                veniam quas?
              </p>
              <table>
                <tbody>
                  <tr className="td-titles">
                    <td>Name</td>
                    <td>On stock</td>
                    <td>Type</td>
                    <td>Sex</td>
                  </tr>
                  <tr>
                    <td>{item ? item.name : "undefined"}</td>
                    <td>Yes</td>
                    <td>{item ? item.type : "undefined"}</td>
                    <td>
                      {item ? (item.sex ? item.sex : "Unissex") : "Unissex"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="content-desc_two">
              <h2>Distributor description</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                reiciendis illo inventore repellendus maiores animi modi nemo
                labore nulla debitis nesciunt facere ea, enim ad, quas provident
                ab sequi ratione.
                <br /> Consequatur laudantium autem pariatur dolor hic.
                Voluptatem natus reiciendis culpa earum debitis molestias maxime
                modi obcaecati doloribus vitae cum veritatis quam, animi tempore
                pariatur dicta architecto?
                <br /> Temporibus repellat minima optio? Commodi atque unde
                earum iusto ipsam perspiciatis ducimus maxime fugit dolores
                quidem.
                <br /> Corporis totam iure, laborum accusamus possimus odio
                earum consectetur magni quibusdam dolorum ab atque dolor neque
                veniam quas?
              </p>
              <p>
                <b>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  reiciendis illo inventore repellendus maiores animi modi nemo
                  labore nulla debitis nesciunt facere ea, enim ad, quas
                  provident ab sequi ratione.
                </b>
              </p>
              <p>
                <i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  reiciendis illo inventore repellendus maiores animi modi nemo
                  labore nulla debitis nesciunt facere ea, enim ad, quas
                  provident ab sequi ratione.
                </i>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                reiciendis illo inventore repellendus maiores animi modi nemo
                labore nulla debitis nesciunt facere ea, enim ad, quas provident
                ab sequi ratione.
                <br /> Consequatur laudantium autem pariatur dolor hic.
                Voluptatem natus reiciendis culpa earum debitis molestias maxime
                modi obcaecati doloribus vitae cum veritatis quam, animi tempore
                pariatur dicta architecto?
                <br /> Temporibus repellat minima optio? Commodi atque unde
                earum iusto ipsam perspiciatis ducimus maxime fugit dolores
                quidem.
                <br /> Corporis totam iure, laborum accusamus possimus odio
                earum consectetur magni quibusdam dolorum ab atque dolor neque
                veniam quas?
              </p>
            </div>
          </div>
        </div>
        <div className={`content-container ${activeButton ? "" : "active"}`}>
          <div className="content">
            <h1>
              <span className="about-title_line"></span>
              Commentaries
              <span className="about-title_line"></span>
            </h1>
            <CommentarySec className="commentary-sec">
              <div className="commentary-details">
                <h2>{item ? itemMeanAvarage : null}</h2>
                <div className="item-rating">
                  <div id="stars">
                    {item
                      ? [...Array(5)].map((star, index) => (
                          <div
                            className={
                              index <= Number(itemMeanAvarage) - 1
                                ? "on"
                                : "off"
                            }
                            key={index}
                          >
                            <FaStar />
                          </div>
                        ))
                      : null}
                  </div>
                  <p className="item-rating_review">
                    ({commentList ? commentList.length : null} reviews)
                  </p>
                </div>
                <button onClick={() => setComment(true)}>
                  Create an review
                </button>
              </div>
              <ul>
                {commentList
                  ? commentList.map((commentary) => (
                      <li key={commentary.id}>
                        <IoPersonCircleSharp className="person-svg" />
                        <div className="item-data_text">
                          <h3>{commentary.client?.name}</h3>
                          <div className="item-rating">
                            {item
                              ? [...Array(5)].map((star, index) => (
                                  <div
                                    className={
                                      index <= commentary.rating - 1
                                        ? "on"
                                        : "off"
                                    }
                                    key={index}
                                  >
                                    <FaStar />
                                  </div>
                                ))
                              : null}
                          </div>
                          <p>{commentary.commentary}</p>
                        </div>
                        {logged ? (
                          commentary.clientId === client ? (
                            <div className="logged-button_list">
                              <button
                                id="button_edit"
                                onClick={() => setEditComm(true)}
                              >
                                <FaPenFancy />
                              </button>
                              <button
                                id="button_delete"
                                onClick={() => setDeleteComm(true)}
                              >
                                <IoMdCloseCircleOutline />
                              </button>
                            </div>
                          ) : null
                        ) : null}
                      </li>
                    ))
                  : null}
              </ul>
            </CommentarySec>
          </div>
        </div>
      </ToggleComponent>
      <Modal modal={comment} setModal={setComment}>
        <CommentaryModal
          onSubmit={commHooks.handleSubmit(sendComment)}
          className="comment-modal"
        >
          <div className="commentary-title">
            <h1>Post your comment</h1>
            <button type="button" onClick={() => setComment(false)}>
              X
            </button>
          </div>
          <label className="commentary-input" htmlFor="commentary">
            <span>Commentary</span>
            <textarea
              {...commHooks.register("commentary")}
              id="commentary"
              rows={8}
            ></textarea>
          </label>
          <label htmlFor="commentary-select" className="commentary-select">
            <span>Rating</span>
            <select
              onChange={(e) =>
                commHooks.setValue("rating", Number(e.target.value))
              }
              name=""
              id="comment-select"
            >
              <option value="not-selected">Select a value</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label>
          <button className="post-comment">Comment</button>
        </CommentaryModal>
      </Modal>
      <Modal setModal={setEditComm} modal={editComm}>
        <CommentaryModal onSubmit={commHooks.handleSubmit(editComment)}>
          <div className="commentary-title">
            <h1>Edit your comment</h1>
            <button type="button" onClick={() => setEditComm(false)}>
              X
            </button>
          </div>
          <label className="commentary-input" htmlFor="commentary">
            <span>Commentary</span>
            <textarea
              {...commHooks.register("commentary")}
              id="commentary"
              rows={8}
            ></textarea>
          </label>
          <label htmlFor="commentary-select" className="commentary-select">
            <span>Rating</span>
            <select
              onChange={(e) =>
                commHooks.setValue("rating", Number(e.target.value))
              }
              name=""
              id="comment-select"
            >
              <option value="not-selected">Select a value</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label>
          <button className="post-comment">Comment</button>
        </CommentaryModal>
      </Modal>
      <Modal setModal={setDeleteComm} modal={deleteComm}>
        <DeleteModal className="modal-delete">
          <h1>Delete this comment?</h1>
          <div className="modal-delete_buttons">
            <button id="button_one" onClick={deleteComment}>
              Yes
            </button>
            <button id="button_two" onClick={() => setDeleteComm(false)}>
              No
            </button>
          </div>
        </DeleteModal>
      </Modal>
    </main>
  );
};

export default SelectedItemPage;
