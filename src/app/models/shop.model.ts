import {Goods} from "./goods.model";

export interface Shop {
  showGoods: boolean;
  id: number;
  name: string;
  goods: Goods[];
  isDisabled: boolean;
}
