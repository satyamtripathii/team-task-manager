import { useEffect, useState } from "react";
import axios from "../api/axios";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔄 Create project
  const createProject = async () => {
    if (!title.trim()) {
      alert("Enter project name");
      return;
    }

    try {
      await axios.post("/projects", { title });
      setTitle("");

      // 🔁 create ke baad fresh list load (same logic inline)
      setLoading(true);
      const res = await axios.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.log("Create error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ No dependency warning (function inside useEffect)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/projects");
        setProjects(res.data);
      } catch (err) {
        console.log("Load error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // 🔥 empty deps → no red line

  return (
    <div>
      <Navbar />

      <div
        style={{
          padding: "30px",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>🚀 Your Projects</h2>

        {/* Create Project */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="New Project"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <button
            onClick={createProject}
            style={{
              padding: "10px 20px",
              background: "#7b2ff7",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Create
          </button>
        </div>

        {loading && <p>Loading projects...</p>}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px",
          }}
        >
          {!loading && projects.length === 0 ? (
            <p>No projects yet</p>
          ) : (
            projects.map((p) => (
              <ProjectCard key={p._id} project={p} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;