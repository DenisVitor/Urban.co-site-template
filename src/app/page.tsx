import * as Main from "./styles/main.style";
import { MainCards } from "@/components/mainCards/cards";
import { WhySection } from "@/components/whySec/why";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Main.MainSectionOne>
        <div className="container-titles">
          <h1>
            <span className="title-one"> A new concept of urban style </span>
            <span className="title-two">
              know more about us or our products
            </span>
          </h1>
          <div className="title-buttons">
            <button id="button-one">
              <Link href="/shop">Shop</Link>
            </button>
            <button id="button-two">
              <Link href="/about">About</Link>
            </button>
          </div>
        </div>
      </Main.MainSectionOne>
      <Main.MainSectionTwo>
        <WhySection />
        <div className="title-sec">
          <h1>Featured Products</h1>
          <div className="title-sec_text">
            <hr />
            <p>
              <i>Here you can find the best</i>
            </p>
            <hr />
          </div>
        </div>
        <div className="items-sec">
          <MainCards />
        </div>
      </Main.MainSectionTwo>
      <Main.MainSectionThree>
        <div className="panel-title">
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
          <p>
            <i>
              <q>A new concept about style</q>
            </i>
          </p>
        </div>
        <div className="panel-lists">
          <div className="panel-list_one">
            <h3>Shop</h3>
            <ul>
              {["Cap", "Hoodie", "Shoes", "Shirt", "Trousers"].map((type) => (
                <li key={type}>
                  <a key={type} href={`/shop?type=${type}`}>
                    <p>{type}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="panel-list_two">
            <h3>About</h3>
            <ul>
              <li>
                <Link href="/about/group">Group</Link>
              </li>
              <li>
                <Link href="/about/owner">Owner</Link>
              </li>
              <li>
                <Link href="/about/shop">Shop</Link>
              </li>
              <li>
                <Link href="/about/policy">Privacy policies</Link>
              </li>
              <li>
                <Link href="/about/terms">Terms of condition</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="panel-contact">
          <div>
            <h2>Contact</h2>
            <p>
              <span></span>
              <i>Talk with us</i>
              <span></span>
            </p>
          </div>
          <button>
            <Link href="/contact">Go to contacts</Link>
          </button>
        </div>
      </Main.MainSectionThree>
    </main>
  );
}
