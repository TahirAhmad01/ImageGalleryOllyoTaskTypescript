import React, { useState } from "react";
import ImageGallery from "./components/ImageGallery";
import SelectItems from "./components/SelectItems";
import imageLists from "./utils/dummyImages.json";

interface Image {
  id: number;
  imageSrc: string;
  selected: boolean;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([...imageLists]);

  return (
    <div className="bg-gray-100 min-h-screen light">
      <div className="max-w-screen-xl m-auto py-5">
        <div className="bg-white rounded-xl shadow-lg mx-2">
          <SelectItems images={images} setImages={setImages} />
          <ImageGallery images={images} setImages={setImages} />
        </div>
      </div>
    </div>
  );
};

export default App;
