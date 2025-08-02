import { api } from './api';
import type { Task } from '../types/task';

export async function getTasks(q?: string) {
  const res = await api.get<Task[]>('/tasks', { params: q ? { q } : {} });
  return res.data;
}
export async function getTask(id: number) {
  const res = await api.get<Task>(`/tasks/${id}`);
  return res.data;
}
export async function createTask(payload: Task) {
  const res = await api.post<Task>('/tasks', {
    ...payload,
    createdAt: new Date().toISOString(),
  });
  return res.data;
}
export async function updateTask(id: number, payload: Task) {
  const res = await api.put<Task>(`/tasks/${id}`, payload);
  return res.data;
}
export async function deleteTask(id: number) {
  await api.delete(`/tasks/${id}`);
}
