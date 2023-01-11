import Head from "next/head";
import { useState } from "react";
import styles from './Animal.module.css'
function Animal() {
    
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });
      

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setAnimalInput("");
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }
    return (
        <div>

            <Head>
                <title>Name my pet</title>
            </Head>

            <main className={styles.main}>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="animal"
                        placeholder="Enter an animal"
                        value={animalInput}
                        onChange={(e) => setAnimalInput(e.target.value)}
                    />
                    <input type="submit" value="Generate names" />
                </form>
                <div className={styles.result}>{result}</div>
            </main>
        </div>
    )
}
export default Animal;