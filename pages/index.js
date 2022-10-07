import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";
import LightBulb from "../components/LightBulb";
import Floor from "../components/Floor";
import OrbitControls from "../components/OrbitControls";
import Draggable from "../components/Draggable";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Render 3.js scene in Next App
        </h1>
        <div className={styles.scene}>
          <Canvas
            shadows={true}
            className={styles.canvas}
            camera={{
              position: [-6, 7, 7],
            }}
          >
            <ambientLight color='red' intensity={0.3}/>
            <LightBulb position={[0, 3, 0]} />
            <Draggable>
              <Box rotateX={3} rotateY={0.2} />
            </Draggable>
            <OrbitControls />
            <Floor position={[0, -1, 0]} />
          </Canvas>
        </div>

        <h1 className={styles.title}>
          Render Clickable button inside 3js
        </h1>

        <h1 className={styles.title}>
          Render Blender file inside 3.js
        </h1>

      </main>
    </div>
  )
}
