function TaskCard({ task }) {
  return (
    <div className="card">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
    </div>
  );
}

export default TaskCard;