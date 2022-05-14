import React from 'react';
import styles from './video_detail.module.css'

const VideoDetail = ({video}) => (
    const id = 'W7edvITC9g4?enablejsapi=1&origin=https%3A%2F%2Fm'
    <section className={styles.detail}>
    <iframe
      className={styles.video}
      type="text/html"
      width="100%"
      height="500px"
      src={video.Trailer}
      frameborder="0"
      allowfullscreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h3>{snippet.channelTitle}</h3>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
)

export default VideoDetail;