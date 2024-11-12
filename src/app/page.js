import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div>
        <p className={styles.Hello}>Hello</p>
        {/* <Image
        src="./favicon.ico" // Replace with the actual path to your image
        alt="Example Image"
        width={500} // Specify the width
        height={300} // Specify the height
        className={styles.image}
      /> */}
      </div>
    </>
  );
}
