import styles from "@/app/styles/page.module.css";
import Image from "next/image";
import corbinImage from "@/app/utils/images/corbinImage.jpg";
import {
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
  XOutlined
} from "@ant-design/icons";

export default function Home() {
  return (
    <div id="main-div" className={styles.mainDiv}>
      <div id="image" className={styles.imageDiv}>
        <h1>Corbin Lazarone</h1>
        <Image
          src={corbinImage}
          alt="corbin-image"
          height={400}
          width={300}
          style={{ borderRadius: 12 }}
        />
        <div id="socials" className={styles.socialDiv}>
          <a href="https://www.instagram.com/corbinlazarone" target="_blank">
            <InstagramOutlined
              style={{ fontSize: 36 }}
            />
          </a>
          <a href="https://twitter.com/corbinlaz" target="_blank">
            <XOutlined
              style={{ fontSize: 36 }}
            />
          </a>
          <a href="https://www.linkedin.com/in/corbin-lazarone-58647923b/" target="_blank">
            <LinkedinOutlined
              style={{ fontSize: 36 }}
            />
          </a>
          <a href="https://github.com/corbinlazarone" target="_blank">
            <GithubOutlined
              style={{ fontSize: 36 }}
            />
          </a>
        </div>
      </div>

      <div id="right-box" className={styles.rightSideDiv}>
        <div id="text" className={styles.textDiv}>
          <h3>Hi, my professor told me to claim my name, so here you go.</h3>
          <h3>A real website is in development, I promise.</h3>
          <h3>In the meantime, here is a study playlist I like.</h3>
        </div>
        <div id="spotify" className={styles.spotifyDiv}>
          <iframe
            style={{ borderRadius: 12 }}
            src="https://open.spotify.com/embed/playlist/7zDfn21pYPtYqyrC6hl93r?utm_source=generator&theme=0"
            width="100%"
            height="400"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
