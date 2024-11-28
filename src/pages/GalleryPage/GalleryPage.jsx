import css from "./GalleryPage.module.css";

export default function GalleryPage() {
  const images = [
    {
      id: 1,
      src: "/ArtGallary/Zip/art1.jpg",
      alt: "Image 1",
      title: "Sunset",
      price: "$1120",
    },
    {
      id: 2,
      src: "/ArtGallary/Zip/art2.jpg",
      alt: "Image 2",
      title: "Mountains",
      price: "$1150",
    },
    {
      id: 3,
      src: "/ArtGallary/Zip/art3.jpg",
      alt: "Image 3",
      title: "Forest",
      price: "$1130",
    },
    {
      id: 4,
      src: "/ArtGallary/Zip/art4.jpg",
      alt: "Image 4",
      title: "Ocean",
      price: "$1200",
    },
    {
      id: 5,
      src: "/ArtGallary/Zip/art5.jpg",
      alt: "Image 5",
      title: "City Lights",
      price: "$1180",
    },
    {
      id: 6,
      src: "/ArtGallary/Zip/art6.jpg",
      alt: "Image 6",
      title: "Desert",
      price: "$1170",
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
