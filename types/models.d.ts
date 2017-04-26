declare type IdentificationNumber = number;
declare namespace IClient {
  interface Info {
    clientId?: IClient.ClientId;
    location?: string;
    firstName: string;
    lastName: string;
    phone?: number;
    email?: string;
    jobs?: IJob.Info[];
  }
  export interface ClientId {
    clientId: IdentificationNumber;
  }
  export interface ClientList {
    name: string;
    ClientId: IClient.ClientId
  }
}

declare namespace IJob {
  export interface Info {
    jobId?: IdentificationNumber;
    job?: string;
    location?: string;
    paid?: boolean;
    total?: number;
  }
}
