import Link from "next/link";
import { StyledAboutMain, StyledAboutPage } from "./about.style";

const About = () => {
  return (
    <StyledAboutPage>
      <StyledAboutMain>
        <div className="about-title">
          <div className="about-title_text">
            <h1>
              What you want to <span> know</span>?
            </h1>
            <p><i><q>Here we can tell a little about us.</q></i></p>
          </div>
        </div>
        <ul>
          <li className="about-sec_owner">
            <div className="about-sec_owner-panel">
              <div>
                <h1>
                  <span className="about-title_line"></span>
                  The <span>owner</span>
                  <span className="about-title_line"></span>
                </h1>
                <p>
                  <i>
                    <q>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aperiam numquam minima necessitatibus quasi, maiores est
                      minus corrupti reprehenderit?
                      <br /> Sapiente, molestiae eos. Enim eveniet molestias est
                      hic incidunt. Itaque, pariatur beatae? Obcaecati eius modi
                      laborum veniam voluptatibus tempore quos exercitationem
                      dignissimos
                      <br /> consectetur sint maxime ea laboriosam fugiat
                      cupiditate delectus tempora vitae, <br />
                      sequi amet illo suscipit ipsum numquam magnam consequuntur
                      recusandae.
                      <br /> Alias. Eveniet repellat enim quasi sequi voluptate
                      labore ipsum, ducimus voluptatem delectus, reiciendis eum
                      asperiores aut nesciunt maxime, <br />
                      ut debitis! Voluptates hic vero non sed officia iste a
                      harum obcaecati exercitationem.
                    </q>
                  </i>
                </p>
                <button>
                  <Link href="/about/owner">Know more</Link>
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1496346236646-50e985b31ea4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="owner-urban.co"
              />
            </div>
          </li>
          <li className="about-sec_shop">
            <div className="about-sec_shop-panel">
              <h1>
                <span className="about-title_line"></span>
                The <span>shop</span>
                <span className="about-title_line"></span>
              </h1>
              <img
                src="https://images.unsplash.com/photo-1598775378121-e24f7062c151?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="shop-urban.co"
              />
              <p>
                <i>
                  <q>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deleniti, laboriosam adipisci tempora optio
                    reprehenderit, magni ut quo, nisi odit officia! Voluptates
                    est repellat explicabo sequi beatae earum numquam nam.
                    <br />
                    Alias accusamus aspernatur ad voluptates, nam cumque ipsam
                    incidunt nobis corporis cupiditate suscipit consequatur,
                    deleniti perspiciatis reiciendis tempore ipsum et. Eum
                    cupiditate placeat laboriosam, aperiam magni explicabo
                    blanditiis ipsum ullam?
                    <br />
                    Saepe esse officiis repellendus dicta eum beatae possimus
                    similique impedit ipsa neque, iusto doloremque quas nesciunt
                    aperiam excepturi laudantium numquam iure adipisci dolorum
                    magni modi harum. Aliquid cum ut eaque.
                    <br />
                    Quos accusamus cumque vitae doloremque quia fuga autem
                    sapiente expedita nam doloribus natus dignissimos, ducimus
                    possimus nisi suscipit fugit laboriosam deserunt rem.
                    Eveniet, aperiam molestiae nam temporibus molestias cumque
                    vero?
                  </q>
                </i>
              </p>
              <button>
                <Link href="/about/shop">Know more</Link>
              </button>
            </div>
          </li>
          <li className="about-sec_group">
            <h1>
              <span className="about-title_line"></span>
              The <span>group</span>
              <span className="about-title_line"></span>
            </h1>
            <p>
              <i>
                <q>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  ad vel esse iste, vero incidunt, repudiandae aperiam pariatur
                  rem, quidem maiores neque. <br />
                  Necessitatibus, temporibus. Consequatur quae fuga eius vel
                  molestias. <br />
                  Dolorem magni omnis fugit. Debitis obcaecati sint, neque
                  reprehenderit natus quisquam eius vel unde nostrum. <br />
                  Quae ullam, libero deleniti sunt fugiat repellat ut, nihil
                  unde fuga quod voluptates velit reprehenderit.
                </q>
              </i>
            </p>
            <ul>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1519150943885-ce186a238b17?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="jackie-doe"
                />
                <h3>Jackie Doe</h3>
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Lily-doe"
                />
                <h3>Lily Doe</h3>
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1583147610149-78ac5cb5a303?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Betty-doe"
                />
                <h3>Betty Doe</h3>
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Marty-doe"
                />
                <h3>Marty Doe</h3>
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1542327897-d73f4005b533?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Peter-doe"
                />
                <h3>Peter Doe</h3>
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1565884280295-98eb83e41c65?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Joe-doe"
                />
                <h3>Joe Doe</h3>
              </li>
            </ul>
            <button>
              <Link href="/about/group">Know more</Link>
            </button>
          </li>
          <li className="term-policy_item">
            <div className="terms-policies">
              <div className="policies-sec">
                <div className="policies-sec_text">
                  <h1>
                    <span className="about-title_line"></span>
                    Privacy <span>policies</span>
                    <span className="about-title_line"></span>
                  </h1>
                  <p>
                    <i>
                      <q>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis magni voluptatibus at itaque iste, maxime ipsam
                        quod, quis ipsa natus nisi temporibus iusto veritatis,
                        eum modi enim expedita sint eius? Ipsam, blanditiis
                        ullam tenetur nulla maxime eum distinctio corporis
                        architecto numquam delectus minima soluta quo. Corporis
                        saepe quos doloribus nihil sunt?
                      </q>
                    </i>
                  </p>
                  <button>
                    <Link href="/about/policy">Know more</Link>
                  </button>
                </div>
                <figure id="image-policies"></figure>
              </div>
              <div className="policies-sec">
                <div className="policies-sec_text">
                  <h1>
                    <span className="about-title_line"></span>
                    Terms of <span>condition</span>
                    <span className="about-title_line"></span>
                  </h1>
                  <p>
                    <i>
                      <q>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis magni voluptatibus at itaque iste, maxime ipsam
                        quod, quis ipsa natus nisi temporibus iusto veritatis,
                        eum modi enim expedita sint eius? Ipsam, blanditiis
                        ullam tenetur nulla maxime eum distinctio corporis
                        architecto numquam delectus minima soluta quo. Corporis
                        saepe quos doloribus nihil sunt?
                      </q>
                    </i>
                  </p>
                  <button>
                    <Link href="/about/terms">Know more</Link>
                  </button>
                </div>
                <figure id="terms-image"></figure>
              </div>
            </div>
          </li>
        </ul>
      </StyledAboutMain>
    </StyledAboutPage>
  );
};

export default About;
