import { Interface } from "readline";

export interface RoomCardProps {
    title: string;
    userCounter: bigint;
    maxUser: bigint;
    color?: string;
}

export default RoomCardProps;