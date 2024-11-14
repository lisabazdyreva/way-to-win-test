export type UserBranchType = "cardiology" | "surgery";
export type UserType = "nurse" | "physician";

export interface IUser {
  id: string;
  name: string;
  surname: string;
  fatherName: string;
  branch: UserBranchType;
  type: UserType;
}

export interface IPhysician extends IUser {
  isChief: boolean;
}

export interface INurse extends IUser {}

export interface IUserModalInject {
  isUserModalOpen: boolean;
  setIsUserModalOpen: (value: boolean) => void;
  setEditUser: (user: IUser) => void;
}
