import { UserType } from "@/types/user";
import { BranchType } from "@/types/user";

export const UserTypeLabel = {
  [UserType.Physician]: "Врач",
  [UserType.Nurse]: "Медсестра",
} as const;

export const BranchLabel = {
  [BranchType.Cardiology]: "Кардиология",
  [BranchType.Surgery]: "Хирургия",
} as const;
