import Image from "next/image";
import heroImage from "../../public/images/cryptocurrency-min.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <article className="max-w-7xl mx-4 xl:mx-auto border-blue-600 flex flex-col sm:flex-row gap-3 my-10 justify-between">
        <div className={`justify-self-center sm:order-1 ${styles.bounce}`}>
          <Image src={heroImage} alt="main image" width={500} height={500} />
        </div>
        <div className=" self-center flex justify-center items-center flex-col sm:w-[50%]">
          <h1 className="text-5xl sm:text-6xl text-center sm:text-left mb-5">Explore Crypto Assets, Prices and News</h1>
          <p className="invisible sm:visible text-xl leading-8">Stay informed about the latest prices, trends, and breaking news of various cryptocurrencies on Cryptowatch, your go-to platform for the world of digital assets.</p>
          {/* <div className="w-10 h-10">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path stroke="#a855f7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 2v16m0 0l-7-7m7 7l7-7"></path>
              </g>
            </svg>
          </div> */}
        </div>
    </article>
  );
}
export default Hero;
