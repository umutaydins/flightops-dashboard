import type{ Task } from '../types/task';

const statusColor: Record<Task['status'], string> = {
  Open: 'secondary', Progress: 'warning', Done: 'success'
};
const prioColor: Record<Task['priority'], string> = {
  Low: 'info', Med: 'primary', High: 'danger'
};

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title">{task.title}</h5>
          <span className={`badge text-bg-${statusColor[task.status]}`}>{task.status}</span>
        </div>
        {task.description && <p className="card-text mt-2">{task.description}</p>}
      </div>
      <div className="card-footer bg-white d-flex gap-2">
        <span className={`badge text-bg-${prioColor[task.priority]}`}>Priority: {task.priority}</span>
        {task.createdAt && <span className="text-muted ms-auto small">{new Date(task.createdAt).toLocaleDateString()}</span>}
      </div>
    </div>
  );
}
