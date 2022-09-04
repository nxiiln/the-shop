import {IAddressInfo} from "./IAddressInfo";
import {IPersonalInfo} from "./IPersonalInfo";
import {IOrder} from "./IOrder";

export type TAccount = IPersonalInfo & IAddressInfo & {
  isActive: boolean;
  orders?: IOrder[];
};
