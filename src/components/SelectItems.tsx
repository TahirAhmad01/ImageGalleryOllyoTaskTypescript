import React from "react";
import logo from "../assets/image/logo.svg";

interface Image {
  id: number;
  imageSrc: string;
  selected: boolean;
}

interface SelectItemsProps {
  images: Image[];
  setImages: React.Dispatch<React.SetStateAction<Image[]>>;
}

const SelectItems: React.FC<SelectItemsProps> = ({
  images,
  setImages,
}: SelectItemsProps) => {
  const selectedItemCount: number = images.filter(
    (image) => image.selected
  ).length;

  // selected image delete
  const handleImageClick = (): void => {
    const updatedImages: Image[] = images.filter((image) => !image.selected);
    setImages(updatedImages);
  };

  // selected image deselect
  const handelImageDeselect = (): void => {
    const updatedImages: Image[] = images.map((image) => ({
      ...image,
      selected: false,
    }));

    setImages(updatedImages);
  };

  return (
    <>
      {selectedItemCount > 0 ? (
        <div className="w-full flex justify-between items-center px-5 py-4 border-b">
          <div className="flex items-center justify-start gap-2">
            <input
              type="checkbox"
              value=""
              name="bordered-checkbox"
              onChange={handelImageDeselect}
              checked
              readOnly
              id="checkbox"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer"
            />
            <label
              className="font-semibold text-md md:text-lg hover:cursor-pointer"
              htmlFor="checkbox"
            >
              {selectedItemCount} items selected
            </label>
          </div>
          <button
            type="button"
            className="md:px-7 px-4 py-2 text-sm font-semibold rounded-3xl bg-gray-50 hover:bg-red-100 text-red-600"
            onClick={handleImageClick}
          >
            Delete Files
          </button>
        </div>
      ) : (
        <div className="px-5 py-4 border-b text-xl font-semibold flex items-center gap-2">
          <img src={logo} className="w-9" alt="Logo" />
          Image Gallery
        </div>
      )}
    </>
  );
};

export default SelectItems;
