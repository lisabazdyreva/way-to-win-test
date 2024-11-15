export enum UserType {
  Nurse = "nurse",
  Physician = "physician",
}

export enum BranchType {
  Cardiology = "cardiology",
  Surgery = "surgery",
}

export interface IUser {
  id: string;
  name: string;
  surname: string;
  fatherName: string;
  branch: BranchType;
  type: UserType;
}

export interface IPhysician extends IUser {
  isChief?: boolean;
}

export interface INurse extends IUser {}

export interface IUserModalInject {
  isUserModalOpen: boolean;
  setIsUserModalOpen: (value: boolean) => void;
  setEditUser: (user: IUser) => void;
}
