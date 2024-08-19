import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>My Next Intro</h1>
      <h2>Why all the lines?</h2>
      <h3>Set up instructions </h3>
      <p>npx create-next-app@latest</p> <p>Project name </p>
      <ul>
        <li>✔ What is your project named? … next-intro .</li>
        <li>✔ Would you like to use TypeScript? … No </li>
        <li>✔ Would you like to use ESLint? … Yes </li>
        <li>✔ Would you like to use Tailwind CSS? … No </li>
        <li>✔ Would you like to use `src/` directory? … Yes </li>
        <li>✔ Would you like to use App Router? (recommended) … Yes </li>
        <li>
          ✔ Would you like to customize the default import alias (@/*)? … No
        </li>
      </ul>
    </main>
  );
}
