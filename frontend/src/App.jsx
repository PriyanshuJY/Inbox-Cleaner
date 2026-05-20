import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [emails, setEmails] = useState([]);
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [searchTerm, setSearchTerm] =
    useState("");

  useEffect(() => {

    const params = new URLSearchParams(
      window.location.search
    );

    const emailData = params.get("emails");

    if (emailData) {

      const parsedEmails = JSON.parse(
        decodeURIComponent(emailData)
      );

      setEmails(parsedEmails);
    }

  }, []);

  const handleLogin = () => {

    window.location.href =
      "http://127.0.0.1:8000/auth/login";
  };


  const deleteEmail = async (id) => {

    await fetch(
      `http://127.0.0.1:8000/auth/delete/${id}`,
      {
        method: "DELETE"
      }
    );

    setEmails(
      emails.filter(
        (email) => email.id !== id
      )
    );
  };


  const archiveEmail = async (id) => {

    await fetch(
      `http://127.0.0.1:8000/auth/archive/${id}`,
      {
        method: "POST"
      }
    );

    setEmails(
      emails.filter(
        (email) => email.id !== id
      )
    );
  };


  const filteredEmails = emails.filter(
    (email) => {

      const matchesCategory =
        selectedCategory === "All"
          ? true
          : email.category === selectedCategory;

      const matchesSearch =
        email.subject
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        email.from
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        email.snippet
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    }
  );

  const jobAlerts =
    emails.filter(
      (e) => e.category === "Job Alerts"
    ).length;

  const promotions =
    emails.filter(
      (e) => e.category === "Promotions"
    ).length;

  const newsletters =
    emails.filter(
      (e) => e.category === "Newsletter"
    ).length;


  return (

    <div className="app">

      <div className="sidebar">

        <h2>Inbox Cleaner</h2>

        <button onClick={handleLogin}>
          Connect Gmail
        </button>

        <ul>

          <li onClick={() =>
            setSelectedCategory("All")
          }>
            All Emails
          </li>

          <li onClick={() =>
            setSelectedCategory("Job Alerts")
          }>
            Job Alerts
          </li>

          <li onClick={() =>
            setSelectedCategory("Promotions")
          }>
            Promotions
          </li>

          <li onClick={() =>
            setSelectedCategory("Newsletter")
          }>
            Newsletter
          </li>

          <li onClick={() =>
            setSelectedCategory("Professional")
          }>
            Professional
          </li>

        </ul>

      </div>

      <div className="main-content">

        <div className="topbar">

          <input
            type="text"
            placeholder="Search emails..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>Total Emails</h3>
            <p>{emails.length}</p>
          </div>

          <div className="stat-card">
            <h3>Job Alerts</h3>
            <p>{jobAlerts}</p>
          </div>

          <div className="stat-card">
            <h3>Promotions</h3>
            <p>{promotions}</p>
          </div>

          <div className="stat-card">
            <h3>Newsletters</h3>
            <p>{newsletters}</p>
          </div>

        </div>

        <div className="email-container">

          {filteredEmails.map((email, index) => (

            <div
              className="email-card"
              key={index}
            >

              <h3>{email.subject}</h3>

              <p>
                <strong>From:</strong>
                {" "}
                {email.from}
              </p>

              <p>{email.snippet}</p>

              <span
                className={`category ${email.category.replace(/\s/g, "")}`}
              >
                {email.category}
              </span>

              <div className="actions">

                <button
                  className="archive-btn"
                  onClick={() => archiveEmail(email.id)}
                >
                  Archive
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteEmail(email.id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default App;