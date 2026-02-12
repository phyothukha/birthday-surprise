"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "100vh";
      heart.style.fontSize = "20px";
      heart.style.animation = "floatUp 4s linear";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 4000);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <main style={styles.container}>
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-120vh); opacity: 0; }
        }
      `}</style>

      {!showSurprise ? (
        <>
          <h1 style={styles.title}>Happy Birthday My Love ❤️</h1>
          <button style={styles.button} onClick={() => setShowSurprise(true)}>
            Open Your Surprise 🎁
          </button>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1 style={styles.title}>Happy Birthday My Love ❤️</h1>

          <h2 style={{ fontSize: 20, fontWeight: 700 }}>
            From the day I met you...
          </h2>
          <p style={{ marginTop: 20, fontWeight: 700 }}>
            You became my sunshine ☀️ <br />
            My happiness 💕 <br />
            My everything ❤️
          </p>

          {/* Replace these with your real images */}
          <div style={styles.imageContainer}>
            <Image
              alt=""
              src="/girl2.jpg"
              width={300}
              height={300}
              // style={styles.image}
              style={{
                objectFit: "contain",
              }}
            />
          </div>

          <h3 style={{ marginTop: 30 }}>I love you more every single day 💖</h3>
        </div>
      )}
    </main>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const styles: any = {
  container: {
    position: "fixed", // full screen fix
    inset: 0, // top:0 left:0 right:0 bottom:0
    width: "100%",
    height: "100dvh", // mobile-safe fullscreen
    padding: "20px",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
    textAlign: "center",
    overflow: "hidden",
  },

  title: {
    fontSize: "clamp(26px, 5vw, 42px)", // responsive font
    fontWeight: 900,
  },

  button: {
    marginTop: "20px",
    padding: "clamp(10px, 2vw, 15px) clamp(20px, 4vw, 30px)",
    fontSize: "clamp(14px, 2vw, 18px)", // responsive button text
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "white",
    color: "#ff4b6e",
  },

  imageContainer: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
    justifyContent: "center",
    width: "100%",
  },

  image: {
    width: "80%", // responsive image
    maxWidth: "300px", // prevent too big on desktop
    height: "auto",
    borderRadius: "15px",
    objectFit: "cover",
  },
};
