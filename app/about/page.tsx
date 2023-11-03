import Image from "next/image";

export const metadata = {
  title: "About",
  description: `Here are some details about mystic shop.`,
};

const About = () => {
  return (
    <main className="about">
      <div className="about-header">
        <Image src={"/about.jpg"} alt="about" fill priority />
      </div>
      <section className="about-body">
        <h1>About Mystic Shop</h1>
        <div>
          <p>
            Welcome to Mystic Shop, where your home's ambiance meets
            enchantment. At Mystic Shop, we believe that every piece of
            furniture has the power to transform a space into a captivating
            haven. Nestled in the heart of Lagos, Nigeria, our showroom
            showcases an exquisite collection of handcrafted furniture,
            carefully curated to cater to diverse tastes and styles.
          </p>
          <p>
            Our journey began with a passion for craftsmanship and an unwavering
            commitment to quality. With a team of skilled artisans and
            designers, we meticulously create furniture that not only exudes
            elegance but also resonates with the essence of modern living. From
            timeless classics to contemporary marvels, each piece in our
            collection is a manifestation of artistry and functionality.
          </p>
          <p>
            We understand that furniture is not just an addition to a room but
            an expression of your personality and lifestyle. With this
            understanding, we strive to provide a seamless experience, guiding
            you to discover pieces that resonate with your unique sensibilities.
            Our knowledgeable staff is dedicated to offering personalized
            assistance, ensuring that every visit to Mystic Shop is an
            exploration of refined taste and comfort.
          </p>
          <p>
            Embracing sustainability and eco-conscious practices, we source our
            materials responsibly, fostering an environment-friendly approach to
            furniture design. By blending traditional craftsmanship with
            innovative techniques, we aim to create pieces that not only enhance
            your living space but also contribute to a better world.
          </p>
          <p>
            Whether you are furnishing your home, designing an office space, or
            seeking inspiration for a commercial project, Mystic Shop is your
            destination for timeless elegance and impeccable style. Step into
            our world of mystique and let our furniture weave its magic into the
            tapestry of your life.
          </p>
          <br />
          <p>
            Welcome to Mystic Shop - where every piece tells a story, and every
            room becomes an enchanting sanctuary.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
