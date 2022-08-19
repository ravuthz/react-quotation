import "./App.css";

import Section from "./components/Section";
import TableBudgetPrice from "./components/TableBudgetPrice";
import TableFeatures from "./components/TableFeatures";
import TableInformation from "./components/TableInformation";

import { info, members } from "./states";

const { preparedBy, preparedFor } = info;

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Section>
          <div className="text-center">
            <h1>Shares & Funds Management</h1>
            {preparedFor && (
              <div className="header-section">
                <h2>
                  <small className="text-muted">Prepared For</small>
                  <br />
                  {preparedFor}
                </h2>
              </div>
            )}
            {preparedBy && (
              <div className="header-section">
                <h2>
                  <small className="text-muted">Prepared by</small>
                  <br />
                  {preparedBy}
                </h2>
              </div>
            )}
          </div>
        </Section>

        <Section>
          <TableInformation></TableInformation>
        </Section>

        <Section>
          <TableFeatures></TableFeatures>
        </Section>

        <Section>
          <TableBudgetPrice></TableBudgetPrice>
        </Section>

        <Section>
          <h3 className="section-title">Resource</h3>
          <p className="text-muted">
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{member.fullName}</td>
                    <td>{member.position}</td>
                    <td>{member.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-muted">
              We are going to arrage other team members if required.
            </p>
            <br />
          </p>
        </Section>

        <Section>
          <h3 className="section-title">Payment Terms</h3>
          <p className="text-muted">
            Payment shall be made by divided into three phases and the Project
            will be kick-start after contract signed.
          </p>
          <table className="table">
            <tbody>
              <tr>
                <td>Phase 1</td>
                <td>After contact signed</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>Phase 2</td>
                <td>After signed off UAT</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>Phase 1</td>
                <td>After completed</td>
                <td>20%</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section className="d-print-none">
          <h3 className="section-title">Our Team</h3>
          <div className="row">
            {members &&
              members.map((member) => (
                <div className="col">
                  <div className="card-box text-center">
                    <div className="user-pic">
                      <img
                        src={member.avatar}
                        className="img-fluid"
                        alt="User Pic"
                      />
                    </div>
                    <h4>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={member.website}
                      >
                        {member.fullName}
                      </a>
                    </h4>
                    <h6 className="text-muted">{member.position}</h6>
                  </div>
                </div>
              ))}
          </div>
        </Section>
        <Section>
          <br/>
          <div className="row">
            <div className="col-6">
              <span>Prepared by</span>
            </div>
            <div className="col-6 text-end">
              <span>Accepted by</span>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default App;
