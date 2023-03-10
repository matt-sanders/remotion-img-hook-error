import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Img } from "remotion";
import { Thumbnail, Player } from "@remotion/player";

function RemotionComponent() {
  return (
    <Img src="https://images.unsplash.com/photo-1674423094915-2546893e2636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
  );
}

const fps = 30;
const commonProps = {
  component: RemotionComponent,
  fps,
  compositionHeight: 100,
  compositionWidth: 100,
  durationInFrames: fps * 3,
};

export default function Home() {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>Toggle the player on and off again to see the error.</p>
        <button onClick={() => setShowPlayer(!showPlayer)}>
          Toggle Player
        </button>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            gap: "4rem",
            marginTop: "4rem",
          }}
        >
          <div>
            <p>This is the Thumbnail:</p>
            <Thumbnail {...commonProps} frameToDisplay={0} />
          </div>
          <div>
            <p>This is the video preview:</p>
            {showPlayer && <Player {...commonProps} />}
          </div>
        </div>
      </main>
    </>
  );
}
