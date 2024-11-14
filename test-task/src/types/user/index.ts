export type UserBranchType = "cardiology" | "surgery";

export interface IUser {
  id: string;
  name: string;
  surname: string;
  fatherName: string;
  branch: UserBranchType;
}

export interface IPhysician extends IUser {
  isChief: boolean;
}

export interface INurse extends IUser {}
