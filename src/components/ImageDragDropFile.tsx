import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import imgUploadIco from "../assets/image/imageIco.png";

interface ImageObject {
  id: number;
  imageSrc: string;
  selected: boolean;
}

interface ImageDragDropInputProps {
  images: ImageObject[];
  setImages: React.Dispatch<React.SetStateAction<ImageObject[]>>;
}

function ImageDragDropInput({ images, setImages }: ImageDragDropInputProps) {
  const [wrongFile, setWrongFile] = useState(false) ;

  // image file selection with dropzone
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.length > 0) {
        const updatedImages: ImageObject[] = acceptedFiles.map((file, idx) => {
          // Image Array Max Id for unique new id generation
          const maxId: number = images.reduce(
            (max, item) => (item.id > max ? item.id : max),
            0
          );
          const newId: number = maxId ? maxId + (idx + 1) : idx + 1;

          // New image object for inset Array Item
          const newImageObject: ImageObject = {
            id: newId,
            imageSrc: URL.createObjectURL(file),
            selected: false,
          };
          return newImageObject;
        });
        setImages([...images, ...updatedImages]);
        setWrongFile(false);
      } else {
        setWrongFile(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [images]
  );

  // image file drop handle
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
      "image/svg": [],
    },
  });

  return (
    <div
      className="flex justify-center items-center w-full dropzone"
      {...getRootProps()}
    >
      <label
        htmlFor="dropzone-file"
        className="flex flex-col justify-center items-center w-full h-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
          <img src={imgUploadIco} alt="image" className="w-12 mb-3" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Add Image</p>

          {wrongFile && (
            <p className="text-xs text-red-500 dark:text-red-400">
              Wrong file select
            </p>
          )}
        </div>
        <input {...getInputProps()} />
      </label>
    </div>
  );
}

export default ImageDragDropInput;
