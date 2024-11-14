export enum UserType {
  Nurse = "nurse",
  Physician = "physician",
}

export const UserTypeLabel = {
  [UserType.Physician]: "Врач",
  [UserType.Nurse]: "Медсестра",
} as const;

export enum BranchType {
  Cardiology = "cardiology",
  Surgery = "surgery",
}

export const BranchLabel = {
  [BranchType.Cardiology]: "Кардиология",
  [BranchType.Surgery]: "Хирургия",
} as const;
