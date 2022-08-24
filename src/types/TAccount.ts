import {IAddressInfo} from "./IAddressInfo";
import {IPersonalInfo} from "./IPersonalInfo";

export type TAccount = IPersonalInfo & IAddressInfo & {isActive: boolean};
