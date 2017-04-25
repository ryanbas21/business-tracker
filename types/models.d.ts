declare type IdentificationNumber = number;
declare namespace IClient {
  interface Info {
    clientId?: IdentificationNumber;
    location?: string;
    firstName: string;
    lastName: string;
    phone?: number;
    email?: string;
    jobs: IJob.Jobs[]
  }
  interface ClientData {
    id: IdentificationNumber;
    location: string;
  }

}
declare namespace IJob {
  interface Info {
    jobId?: IdentificationNumber;
    job?: string;
    location?: string;
    paid?: boolean;
    total?: number;
  }
  interface Jobs {
    paid: boolean;
    total: number;
    location: string;
    type: string;

  }

}
