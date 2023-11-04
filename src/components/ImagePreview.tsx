import React from "react";
import { PhotoProvider, PhotoSlider } from "react-photo-view";

interface Image {
  id: number;
  imageSrc: string;
  selected: boolean;
}

interface ImagePreviewProps {
  images: Image[];
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  images,
  visible,
  setVisible,
  index,
  setIndex,
}: ImagePreviewProps) => {
  return (
    <PhotoProvider>
      <PhotoSlider
        images={images.map((item) => ({
          src: item.imageSrc,
          key: item.id.toString(),
        }))}
        visible={visible}
        onClose={() => setVisible(false)}
        index={index}
        onIndexChange={setIndex}
      />
    </PhotoProvider>
  );
};

export default ImagePreview;
