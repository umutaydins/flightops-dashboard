import { api } from './api';
import type{ Task } from '../types/task';

export async function getTasks(q?: string) {
  // json-server'da q paramı full-text search yapar
  const res = await api.get<Task[]>('/tasks', { params: q ? { q } : {} });
  return res.data;
}

export async function getTask(id: number) {
  const res = await api.get<Task>(`/tasks/${id}`);
  return res.data;
}
