import React, { useCallback, useEffect, useRef, useState } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useRecoilState } from 'recoil';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import { ItemContainer } from './styles';
import { TItem, itemsState, DEFAULT_IMG_URL } from '../../Atoms';

interface ItemDetailProps {
  item: TItem;
  handleModalOpen(item: TItem): void;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item, handleModalOpen }) => {
  const ilenght = item.sizes.length - 1;
  const [globalItems, setGlobalItems] = useRecoilState<TItem[]>(itemsState);
  const [imagePreview, setImagePreview] = useState(DEFAULT_IMG_URL);

  const handleDeleteBtn = (): void => {
    const updatedItem = globalItems.filter(itm => itm.color !== item.color);
    setGlobalItems(updatedItem);
  };

  const handleUpdateBtn = (): void => {
    handleModalOpen(item);
  };

  const reader = new FileReader();

  reader.onload = () => {
    if (reader.readyState === FileReader.DONE) {
      setImagePreview(reader.result as string);
    }
  };

  useEffect(() => {
    if (item && item.productImages[0].image) {
      // console.log(typeof item.productImages[0].image);
      if (typeof item.productImages[0].image === 'object')
        reader.readAsDataURL(item.productImages[0].image);
      else setImagePreview(item.productImages[0].image);
    }
  }, [item]);

  return (
    <ItemContainer>
      <div className="image">
        <img src={imagePreview} alt={item.color} />
      </div>
      <div className="elements">
        <div className="row1">
          <div className="ileft">Color:</div>
          <div>
            <FiberManualRecordIcon style={{ color: `${item.imageColor}` }} />
          </div>
          <div>{item.color}</div>
        </div>
        <div className="row2">
          <div className="ileft">Sizes:</div>
          <div className="iright">
            {item.sizes.map((sz, idx) => (
              <>
                <>{sz.sizeTag}</>
                <>
                  ({sz.quantity}){ilenght === idx ? '' : ', '}
                </>
              </>
            ))}
          </div>
        </div>
      </div>
      <button type="button" className="delete-btn" onClick={handleDeleteBtn}>
        <ClearIcon />
      </button>

      <button type="button" className="edit-btn" onClick={handleUpdateBtn}>
        <EditIcon />
      </button>
    </ItemContainer>
  );
};

export default ItemDetail;
