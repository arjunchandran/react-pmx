import "./RoleSelect.css"
import React, { useState } from "react"
import { Container } from "react-bootstrap";
import { Route, Routes, useNavigate } from 'react-router-dom'
import { AppContext } from './AppContext'
import Questionnairre from './Questionnairre'

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
  var primarySkill="";
  var secondarySkill="";

  const [primarySkillId, setPrimarySkillId] = useState(NONE_SELECTED_ID);
  const [secondarySkillIds, setSecondarySkillIds] = useState([]);

  const navigate = useNavigate()
  const [open] = useState('')

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
  const handleClick = () => {
    primarySkill = skills.find((skill) => skill.id === primarySkillId).name;
    secondarySkill = secondarySkillIds
    .map((id) => skills.find((skill) => skill.id === id).name)
    .join(", ");
    localStorage.setItem("primarySkill",primarySkill);
    localStorage.setItem("secondarySkill",secondarySkill);
    navigate('/questionnairre')
  }
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
      <br/>
      <button className='testButton' onClick={handleClick}>Take Test</button>
        <AppContext.Provider value={{ data: open }}>
          <Routes>
            <Route element={<Questionnairre/>} path='/questionnairre' />
          </Routes>
        </AppContext.Provider>
    </Container>
  );
}

export default RoleSelect