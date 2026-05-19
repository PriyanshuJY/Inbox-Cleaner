import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [emails, setEmails] = useState([]);

  useEffect(() => {

    const params = new URLSearchParams(window.location.search);

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

  return (

    <div className="container">

      <h1>Inbox Cleaner</h1>

      <button onClick={handleLogin}>
        Connect Gmail
      </button>

      <div className="email-container">

        {emails.map((email, index) => (

          <div className="email-card" key={index}>

            <h3>{email.subject}</h3>

            <p>
              <strong>From:</strong> {email.from}
            </p>

            <p>{email.snippet}</p>

            <span className="category">
              {email.category}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;