import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import TaskCard from "../components/TaskCard";
import Navbar from "../components/Navbar";

function ProjectDetails() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setTasks(res.data);
    };

    fetchTasks();
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Tasks</h2>

        {tasks.map((t) => (
          <TaskCard key={t._id} task={t} />
        ))}
      </div>
    </>
  );
}

export default ProjectDetails;