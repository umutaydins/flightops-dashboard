import type { Task } from '../types/task';

const statusColor: Record<Task['status'], string> = { Open: 'secondary', Progress: 'warning', Done: 'success' };
const prioColor: Record<Task['priority'], string> = { Low: 'info', Med: 'primary', High: 'danger' };

export default function TaskCard({
  task,
  onEdit,
  onDelete,
}: {
  task: Task;
  onEdit?: (t: Task) => void;
  onDelete?: (t: Task) => void;
}) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title">{task.title}</h5>
          <span className={`badge text-bg-${statusColor[task.status]}`}>{task.status}</span>
        </div>
        {task.description && <p className="card-text mt-2">{task.description}</p>}
      </div>
      <div className="card-footer bg-white d-flex align-items-center gap-2">
        <span className={`badge text-bg-${prioColor[task.priority]}`}>Priority: {task.priority}</span>
        <div className="ms-auto d-flex gap-2">
          {onEdit && <button className="btn btn-sm btn-outline-primary" onClick={() => onEdit(task)}>Edit</button>}
          {onDelete && <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(task)}>Delete</button>}
        </div>
      </div>
    </div>
  );
}
