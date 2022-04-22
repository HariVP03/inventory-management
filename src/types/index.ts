import { IconType } from "react-icons";

export type {
    classOverview,
    dashboardTest,
    administration,
} from "./tableTypes";
export interface LinkItemProps {
    name: string;
    icon: IconType;
    active?: boolean;
    link: string;
}
