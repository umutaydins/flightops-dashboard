import { useEffect, useState } from 'react';
import type { Task, Priority, Status } from '../types/task';

type Props = {
  initial?: Task;              // edit için mevcut değerler
  onSubmit: (data: Task) => Promise<void> | void;
  onCancel: () => void;
};

const priorities: Priority[] = ['Low', 'Med', 'High'];
const statuses: Status[] = ['Open', 'Progress', 'Done'];

export default function TaskForm({ initial, onSubmit, onCancel }: Props) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('Med');
  const [status, setStatus] = useState<Status>('Open');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (initial) {
      setTitle(initial.title || '');
      setPriority(initial.priority || 'Med');
      setStatus(initial.status || 'Open');
      setDescription(initial.description || '');
    }
  }, [initial]);

  const validate = () => {
    const e: string[] = [];
    if (title.trim().length < 3) e.push('Title must be at least 3 characters.');
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const eList = validate();
    setErrors(eList);
    if (eList.length) return;

    setSubmitting(true);
    try {
      await onSubmit({ title: title.trim(), priority, status, description });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal-body">
        {errors.length > 0 && (
          <div className="alert alert-danger py-2">
            {errors.map((m, i) => <div key={i}>{m}</div>)}
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input className="form-control" value={title} onChange={e => setTitle(e.target.value)} required minLength={3}/>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Priority</label>
            <select className="form-select" value={priority} onChange={e => setPriority(e.target.value as Priority)}>
              {priorities.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Status</label>
            <select className="form-select" value={status} onChange={e => setStatus(e.target.value as Status)}>
              {statuses.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <div className="mb-2">
          <label className="form-label">Description (optional)</label>
          <textarea className="form-control" rows={3} value={description} onChange={e => setDescription(e.target.value)} />
        </div>
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-outline-secondary" onClick={onCancel} disabled={submitting}>Cancel</button>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {initial ? 'Save Changes' : 'Create Task'}
        </button>
      </div>
    </form>
  );
}
