import React, { useEffect, useState } from "react";
import "./Team.css";
const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("./Team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div id="Team">
      <div>
        <h1 className="text-danger mb-4 mt-5 team-box mx-auto">
          Meet Our Team{" "}
        </h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto ">
        {teams.map((team) => (
          <div className="col" key={team.key}>
            <div className="card Service-card h-60 shadow p-3 mb-5 mt-5 bg-white rounded">
              <img
                className="team-image"
                src={team.image}
                className="img-fluid rounded"
                alt="..."
              />
              <div className="card-body">
                <h2 className="card-title text-danger">
                  <b>{team.name}</b>
                </h2>
                <p className="card-text mt-3 h4">{team.designation}</p>
                <br />
                <button className="btn btn-success">Contact Us</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
