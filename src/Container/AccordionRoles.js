import Accordion from 'react-bootstrap/Accordion';
import './AccordionRoles.css';

function AccordionRoles() {
  return (
    <Accordion className='AccordionClass'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Primary Role</Accordion.Header>
        <Accordion.Body>
          This is primary skill
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Secondary Role</Accordion.Header>
        <Accordion.Body>
         This is secondary skill
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionRoles;