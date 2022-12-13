import "./RoleSelect.css"
import React, { useState } from "react"
import { Container } from "react-bootstrap";
import TestButton from "./TestButton";

function RoleSelect() {
  const skills = [
    { id: 1, name: "Generalist - HR/ Business Partner" },
    { id: 2, name: "Generalist - HR, Administration, and IR/Business Partner" },
    { id: 3, name: "Learning & Development/Organization Development" },
    { id: 4, name: "Administration" },
    { id: 5, name: "Industrial Relations" },
    { id: 6, name: "Employee Engagement/Experience" },
    { id: 7, name: "Talent Acquisition" },
    { id: 8, name: "On Boarding/Induction Management" },
    { id: 9, name: "Compensation & Benefits /Payroll Management & Exit Management" },
    { id: 10, name: "Welfare & Benefits Management" },
    { id: 11, name: "Performance Enhancement" },
    { id: 12, name: "HR Analyst/Information Technology" }
  ];

  const NONE_SELECTED_ID = -1;

  const [primarySkillId, setPrimarySkillId] = useState(NONE_SELECTED_ID);
  const [secondarySkillIds, setSecondarySkillIds] = useState([]);

  const recordSecondarySkills = (checkbox, skillId) => {
    if (checkbox.checked) {
      if (skillId === primarySkillId) {
        checkbox.checked = false;
        return;
      }
      let skillIds = [...secondarySkillIds, skillId];
      setSecondarySkillIds(skillIds);
    } else {
      setSecondarySkillIds((secSkillIds) =>
        secSkillIds.filter((value) => value !== skillId)
      );
    }
  };

  return (
    <Container className="tableDiv">
      <h1>Select your Primary and Secondary skills</h1>
      <div>
        <table className="TableComponent" >
          <thead>
            <tr>
              <th className="heading">Skills</th>
              <th className="heading">Primary</th>
              <th className="heading">Secondary</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr key={skill.id}>
                <td className="tableId">{skill.id}</td>
                <td>{skill.name}</td>
                <td>
                  <input
                    type="radio"
                    checked={skill.id === primarySkillId}
                    name="primary-skill"
                    onChange={() => {
                      if (!secondarySkillIds.includes(skill.id)) {
                        setPrimarySkillId(skill.id);
                      }
                    }}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    onChange={(e) => recordSecondarySkills(e.target, skill.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3>Selection</h3>
        <div>
          <span>Primary Skills: </span>
          {primarySkillId !== -1 ? (
            <span>
              {skills.find((skill) => skill.id === primarySkillId).name}
            </span>
          ) : (
            <i>None</i>
          )}
        </div>
        <div>
          <span>Secondary Skills: </span>
          {secondarySkillIds.length !== 0 ? (
            <span>
              {secondarySkillIds
                .map((id) => skills.find((skill) => skill.id === id).name)
                .join(", ")}
            </span>
          ) : (
            <i>None</i>
          )}
        </div>
      </div><br/>
      <TestButton/>
    </Container>
  );
}

export default RoleSelect