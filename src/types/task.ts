export type Priority = 'Low' | 'Med' | 'High';
export type Status = 'Open' | 'Progress' | 'Done';

export interface Task {
  id?: number;
  title: string;
  priority: Priority;
  status: Status;
  description?: string;
  createdAt?: string;
}
