import Image from "next/image";

export default function Home() {
  return (
    <main className="home">
      <div className="hero">
        <Image src={"/hero.jpg"} fill alt="hero" />
      </div>
      <section>
        <h1>Our Products</h1>
        <div></div>
      </section>
    </main>
  );
}
