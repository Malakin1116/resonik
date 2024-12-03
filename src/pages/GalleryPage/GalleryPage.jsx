import css from "./GalleryPage.module.css";

export default function GalleryPage() {
  const images = [
    {
      id: 1,
      src: "/Gallery/1228standart.jpg",
      alt: "Image 1",
      title: "1/2-28 223",
      price: "$150",
    },
    {
      id: 2,
      src: "/Gallery/58standart.jpg",
      alt: "Image 2",
      title: "5/8-24 308",
      price: "$150",
    },
    {
      id: 3,
      src: "/Gallery/15standart.jpg",
      alt: "Image 3",
      title: "15R 308",
      price: "$150",
    },
    {
      id: 4,
      src: "/Gallery/58interga.jpg",
      alt: "Image 4",
      title: "5/8-24 Integra 308",
      price: "$300",
    },
    {
      id: 5,
      src: "/Gallery/14lstandart.jpg",
      alt: "Image 5",
      title: "15L 308",
      price: "$150",
    },
    {
      id: 6,
      src: "/Gallery/1228standart.jpg",
      alt: "Image 6",
      title: "1/2-28 223",
      price: "$150",
    },
  ];

  return (
    <div className={css.container}>
      <h1 className={css.title}>Gallery</h1>
      <div className={css.grid}>
        {images.map(({ id, src, alt, title, price }) => (
          <div key={id} className={css.card}>
            <img src={src} alt={alt} className={css.image} />
            <div className={css.info}>
              <h2 className={css.title}>{title}</h2>
              <p className={css.price}>{price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
