import css from "../ImageCard/ImageCard.module.css";

export default function ImageCard({
  altDescription,
  urlSmall,
  urlRegular,
  onOpenModal,
  dataModal,
}) {
  const data = {
    src: urlRegular,
    alt: altDescription,
  };

  function openModal(data) {
    dataModal(data);
    onOpenModal();
  }

  return (
    <div className={css.imageBox}>
      <img
        src={urlSmall}
        alt={altDescription}
        onClick={() => {
          openModal(data);
        }}
      />
    </div>
  );
}
