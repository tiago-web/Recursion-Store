import { TItem } from '../pages/Admin/AddEditProduct/Atoms';

type TItemAction = {
  color: string;
  action: string;
};

const getItemsActions = (
  serverItems: TItem[],
  globalItems: TItem[],
): TItemAction[] => {
  // const serverItems = [{ color: 'black' }, { color: 'blue' }, { color: 'red' }];
  // const globalItems = [
  //   { color: 'black' },
  //   { color: 'white' },
  //   { color: 'red' },
  // ];

  const items1: TItemAction[] = serverItems.map(itm => {
    const foundItem = globalItems.find(gItm => gItm.color === itm.color);
    if (foundItem) return { color: itm.color, action: 'update' };
    return { color: itm.color, action: 'delete' };
  });

  const items2: (TItemAction | undefined)[] = globalItems.map(gItm => {
    const foundItem = serverItems.find(itm => gItm.color === itm.color);
    if (!foundItem) return { color: gItm.color, action: 'add' };
    return undefined;
  });

  const items: TItemAction[] = items1
    .concat(items2 as TItemAction[])
    .filter(itm => itm);

  // items = items.filter(itm => itm); // delete undefined objects
  console.log(items);
  return items;
};

export default getItemsActions;
