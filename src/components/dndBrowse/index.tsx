import React from "react";
import Image from "next/image";
import { Wrapper } from "./styles";
import useCreateNFTStore from "stores";

interface Props {}

const DNDFileBrowse: React.FC<Props> = ({}) => {
  const image = useCreateNFTStore((s) => s.image);
  const changeImage = useCreateNFTStore((state) => state.changeImage);
  const changeName = useCreateNFTStore((state) => state.changeName);

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      changeName(e.target.files[0].name);
      changeImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const imageDragOvered = (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  };

  const imageDropped = (e) => {
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      imageDragOvered(e);

      changeName(e.dataTransfer.files[0].name);
      changeImage(URL.createObjectURL(e.dataTransfer.files[0]));
    }
  };

  return (
    <Wrapper>
      <div id="file-upload-form" className="uploader">
        <input
          id="file-upload"
          type="file"
          accept="image/* video/*"
          onChange={imageChange}
        />
        <label
          htmlFor="file-upload"
          id="file-drag"
          onDrop={imageDropped}
          onDragOver={imageDragOvered}
        >
          <Image
            id="file-image"
            width="300"
            height="200"
            src={image == "" ? "/assets/preview.png" : image}
            alt="Preview"
          />
          <div id="start">
            <div>Please drag your file and drop here</div>
            <div id="notimage" className="hidden">
              Please select an image
            </div>
            <span id="file-upload-btn" className="btn btn-primary">
              Browse File
            </span>
          </div>
          <div id="response" className="hidden">
            <div id="messages"></div>
          </div>
        </label>
      </div>
    </Wrapper>
  );
};

export default DNDFileBrowse;
