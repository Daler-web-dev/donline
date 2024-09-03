import { Employee as TEmployee } from "../api/employee/Employee";

export const EMPLOYEE_TITLE_FIELD = "role";

export const EmployeeTitle = (record: TEmployee): string => {
  return record.role?.toString() || String(record.id);
};
