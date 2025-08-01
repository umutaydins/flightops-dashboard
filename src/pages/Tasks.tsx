import { useEffect, useMemo, useState } from 'react';
import { getTasks } from '../services/tasks';
import type{ Task } from '../types/task';
import TaskCard from '../components/TaskCard';

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;
    const load = async () => {
      try {
        setLoading(true);
        const data = await getTasks(); // ilk yüklemede tam liste
        if (!ignore) setTasks(data);
      } catch (e) {
        setError('Failed to load tasks.');
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => { ignore = true; };
  }, []);

  // client-side filter (hemen şimdi)
  const filtered = useMemo(() => {
    if (!q.trim()) return tasks;
    const s = q.toLowerCase();
    return tasks.filter(t =>
      t.title.toLowerCase().includes(s) ||
      t.status.toLowerCase().includes(s) ||
      t.priority.toLowerCase().includes(s)
    );
  }, [q, tasks]);

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center gap-2 mb-3">
        <h3 className="m-0">Tasks</h3>
        <span className="badge text-bg-light">{filtered.length}</span>
        <div className="ms-auto" style={{ minWidth: 280 }}>
          <input
            className="form-control"
            placeholder="Search (title, status, priority)…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <div className="alert alert-secondary">Loading…</div>}

      <div className="row g-3">
        {filtered.map(t => (
          <div key={t.id} className="col-12 col-md-6 col-lg-4">
            <TaskCard task={t} />
          </div>
        ))}
        {!loading && filtered.length === 0 && (
          <div className="text-muted">No tasks found.</div>
        )}
      </div>
    </div>
  );
}
