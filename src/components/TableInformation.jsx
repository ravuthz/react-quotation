import { useAtom } from "jotai";
import { grandTotalEstimatedBudgetAtom, infoAtom } from "../states";
import { currency } from "../utils";

const TableInformation = () => {
  const [info] = useAtom(infoAtom);
  const [grandTotal] = useAtom(grandTotalEstimatedBudgetAtom);
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>Project Title</th>
          <td className="text-left" colSpan="3">
            <strong>{info.projectTitle}</strong>
          </td>
        </tr>
        <tr>
          <th>Submitted by</th>
          <td>{info.submittedBy}</td>
          <th>Duration</th>
          <td>{info.duration}</td>
        </tr>
        <tr>
          <th>Phone / Email</th>
          <td>{info.phoneEmail}</td>
          <th>Total Estimated Budget</th>
          <td>{currency(grandTotal)}</td>
        </tr>
        <tr>
          <th>Date of proposal</th>
          <td>{info.dateOfProposal}</td>
          <th>Version No.</th>
          <td>{info.version}</td>
        </tr>
        <tr>
          <th>Project start date</th>
          <td>{info.startDate}</td>
          <th>Project complete date</th>
          <td>{info.endDate}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableInformation;
