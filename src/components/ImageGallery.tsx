import update from "immutability-helper";
import { useCallback, useState } from "react";
import Card from "./ImageCard";
import ImageDragDroopInp from "./ImageDragDropFile";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ImagePreview from "./ImagePreview";

interface Image {
  id: number;
  imageSrc: string;
  selected: boolean;
}

interface ImageGalleryProps {
  images: Image[];
  setImages: React.Dispatch<React.SetStateAction<Image[]>>;
}

function ImageGallery({ images, setImages }: ImageGalleryProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [parent] = useAutoAnimate();

  // for Dnd move card
  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setImages((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // image preview select item
  const selectedImage = useCallback((idx: number) => {
    setVisible(true);
    setIndex(idx - 1);
  }, []);

  // render image card
  const renderCard = useCallback(
    (image: Image, idx: number) => {
      const { id, imageSrc, selected } = image || {};
      return (
        <Card
          key={id}
          index={idx}
          id={id}
          imageSrc={imageSrc}
          moveCard={moveCard}
          selected={selected}
          onClick={selectedImage}
          setImages={setImages}
        />
      );
    },
    [moveCard, selectedImage, setImages]
  );

  return (
    <div className="px-4 py-5">
      <div
        className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 md:[&>*:first-child]:row-span-2 md:[&>*:first-child]:col-span-2 md:[&>*:first-child]:h-[27rem] md:[&>*]:rounded-lg [&>*]:border [&>*]:w-full md:[&>*]:h-52 [&>*]:h-72 [&>*]:bg-gray-300"
        ref={parent}
      >
        {images?.map((card, idx) => renderCard(card, idx))}
        <ImageDragDroopInp images={images} setImages={setImages} />
        <ImagePreview
          images={images}
          visible={visible}
          setVisible={setVisible}
          index={index}
          setIndex={setIndex}
        />
      </div>
    </div>
  );
}

export default ImageGallery;
