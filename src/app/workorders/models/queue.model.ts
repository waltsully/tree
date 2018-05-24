export interface IQueue {
        NodeId: number;
        Caption: string;
        ParentId: string;
        Count: number;
        UserId: number;
        UserNetworkId: string;
        Children: IQueue[] ;
}
