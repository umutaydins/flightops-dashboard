import { useEffect, useMemo, useState } from 'react';
import { createTask, deleteTask, getTasks, updateTask } from '../services/tasks';
import type { Task } from '../types/task';
import TaskCard from '../components/TaskCard';
import Modal from '../components/Modal';
import TaskForm from '../components/TaskForm';

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState('');
  const [error, setError] = useState<string | null>(null);

  // modal state
  const [openCreate, setOpenCreate] = useState(false);
  const [editTask, setEditTask] = useState<Task | null>(null);

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        setLoading(true);
        const data = await getTasks();
        if (!ignore) setTasks(data);
      } catch {
        setError('Failed to load tasks.');
      } finally {
        setLoading(false);
      }
    })();
    return () => { ignore = true; };
  }, []);

  const filtered = useMemo(() => {
    if (!q.trim()) return tasks;
    const s = q.toLowerCase();
    return tasks.filter(t =>
      t.title.toLowerCase().includes(s) ||
      t.status.toLowerCase().includes(s) ||
      t.priority.toLowerCase().includes(s)
    );
  }, [q, tasks]);

  // CREATE
  const handleCreate = async (data: Task) => {
    const created = await createTask(data);
    setTasks(prev => [created, ...prev]);
    setOpenCreate(false);
  };

  // EDIT
  const handleEdit = async (data: Task) => {
    if (!editTask?.id) return;
    const updated = await updateTask(editTask.id, { ...editTask, ...data });
    setTasks(prev => prev.map(t => t.id === updated.id ? updated : t));
    setEditTask(null);
  };

  // DELETE
  const handleDelete = async (t: Task) => {
    if (!t.id) return;
    if (!confirm(`Delete "${t.title}"?`)) return;
    await deleteTask(t.id);
    setTasks(prev => prev.filter(x => x.id !== t.id));
  };

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center gap-2 mb-3">
        <h3 className="m-0">Tasks</h3>
        <span className="badge text-bg-light">{filtered.length}</span>
        <div className="ms-auto d-flex gap-2">
          <input
            className="form-control"
            style={{ minWidth: 280 }}
            placeholder="Search (title, status, priority)…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <button className="btn btn-primary" onClick={() => setOpenCreate(true)}>+ New</button>
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <div className="alert alert-secondary">Loading…</div>}

      <div className="row g-3">
        {filtered.map(t => (
          <div key={t.id} className="col-12 col-md-6 col-lg-4">
            <TaskCard task={t} onEdit={setEditTask} onDelete={handleDelete} />
          </div>
        ))}
        {!loading && filtered.length === 0 && (
          <div className="text-muted">No tasks found.</div>
        )}
      </div>

      {/* Create Modal */}
      <Modal open={openCreate} title="Create Task" onClose={() => setOpenCreate(false)}>
        <TaskForm onSubmit={handleCreate} onCancel={() => setOpenCreate(false)} />
      </Modal>

      {/* Edit Modal */}
      <Modal open={!!editTask} title="Edit Task" onClose={() => setEditTask(null)}>
        {editTask && (
          <TaskForm initial={editTask} onSubmit={handleEdit} onCancel={() => setEditTask(null)} />
        )}
      </Modal>
    </div>
  );
}
