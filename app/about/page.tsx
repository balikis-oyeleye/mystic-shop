import Image from "next/image";

const About = () => {
  return (
    <main className="about">
      <div className="about-header">
        <Image src={"/about.jpg"} alt="about" fill />
      </div>
      <section className="about-body">
        <h1>About Mystic Shop</h1>
        <p></p>
      </section>
    </main>
  );
};

export default About;
