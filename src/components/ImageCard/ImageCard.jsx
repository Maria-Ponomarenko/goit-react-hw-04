import css from "../ImageCard/ImageCard.module.css";

export default function ImageCard({
  altDescription,
  urlSmall,
  urlRegular,
  onOpenModal,
  onDataForModal,
}) {
  function openModal() {
    onDataForModal({ src: urlRegular, alt: altDescription });
    onOpenModal();
  }

  return (
    <div className={css.imageBox}>
      <img src={urlSmall} alt={altDescription} onClick={openModal} />
    </div>
  );
}
