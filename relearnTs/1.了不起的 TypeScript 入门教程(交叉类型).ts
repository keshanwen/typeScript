
interface IPerson {
    id: string;
    age: number;
  }
  
  interface IWorker {
    companyId: string;
  }
  
  type IStaff = IPerson & IWorker;
  
  const staff: IStaff = {
    id: 'E1006',
    age: 33,
    companyId: 'EFT'
  };
  
  console.dir(staff)