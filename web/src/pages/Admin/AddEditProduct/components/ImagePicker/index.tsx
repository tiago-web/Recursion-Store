import React, { useState, useRef, useCallback } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { DEFAULT_IMG_URL, TItem } from '../../Atoms';
import { Wrapper, ImageContainer } from './styles';

interface ImagePickerProps {
  item: TItem;
  imageNumber: number;
  handleImage(file: string | null, imageNumber: number): void;
  setAlertOpen(open: boolean): void;
}

const ImagePicker: React.FC<ImagePickerProps> = ({
  item,
  imageNumber,
  handleImage,
  setAlertOpen,
}) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const previousImgFile = useRef<string>(DEFAULT_IMG_URL);

  const [previewImage, setPreviewImage] = useState<string>(
    () => (item.productImages[imageNumber].image as string) ?? DEFAULT_IMG_URL,
  );

  const handleClick = useCallback(() => {
    if (inputEl.current) inputEl.current.click();
  }, []);

  const handleOnKeyPress = useCallback(e => {
    if (e.key === ' ') if (inputEl.current) inputEl.current.click();
  }, []);

  const handleClear = useCallback(() => {
    if (previousImgFile.current !== DEFAULT_IMG_URL) {
      previousImgFile.current = DEFAULT_IMG_URL;
      setPreviewImage(DEFAULT_IMG_URL);
      handleImage(null, imageNumber);
    }
  }, []);

  const fileSelectedHandler = useCallback(e => {
    const file = e.target.files[0];

    if (file && file.type !== 'image/jpeg') {
      console.log('error');
      setAlertOpen(true);
    } else {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === FileReader.DONE) {
          setPreviewImage(reader.result as string);
          handleImage(file, imageNumber);
          previousImgFile.current = reader.result as string;
        }
      };

      reader.readAsDataURL(file);
    }
  }, []);

  return (
    <>
      <input
        style={{ display: 'none' }}
        ref={inputEl}
        type="file"
        onChange={fileSelectedHandler}
      />
      <Wrapper>
        <ImageContainer
          role="button"
          onClick={handleClick}
          onKeyPress={handleOnKeyPress}
          tabIndex={0}
        >
          <img src={previewImage} alt="" />
        </ImageContainer>
        <button type="button" onClick={handleClear}>
          <ClearIcon />
        </button>
      </Wrapper>
    </>
  );
};

export default ImagePicker;
