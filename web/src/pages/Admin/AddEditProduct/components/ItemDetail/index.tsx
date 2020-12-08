import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { ItemContainer } from './styles';
import { TItem } from '../../Atoms';

interface ItemDetailProps {
  item: TItem;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  const ilenght = item.sizes.length - 1;

  return (
    <ItemContainer>
      <div className="image">
        <img src={item.productImages[0].image as string} alt={item.color} />
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
    </ItemContainer>
  );
};

export default ItemDetail;
