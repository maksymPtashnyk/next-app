import styles from './Banner.module.scss'

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.background} />
      <h2 className={styles.banner__header}>
      Port Mall - крупнейший
      <br/>
      молл в Молдове
      </h2>
    </section>
  )
}
