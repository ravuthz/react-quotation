import { useAtom } from "jotai";
import { budgetPricesAtom, grandTotalEstimatedBudgetAtom, infoAtom, totalEstimatedBudgetAtom } from "../states";
import { currency } from "../utils";

const TableBudgetPrice = () => {
  const [info] = useAtom(infoAtom);
  const [data] = useAtom(budgetPricesAtom);
  const [totalPrice] = useAtom(totalEstimatedBudgetAtom);
  const [grandTotal] = useAtom(grandTotalEstimatedBudgetAtom);
  
  return (
    <>
      <h3 className="section-title">Budget Price</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Needs</th>
            <th className="text-end">Party</th>
            <th className="text-end">Cost</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.needs}</td>
              <td className="text-end">{item.party}</td>
              <td className="text-end">{currency(item.cost)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2" className="text-end">
              {info.vatLabel}
            </td>
            <td className="text-end">{currency(totalPrice * info.vatValue)}</td>
          </tr>
          <tr>
            <td colSpan="2" className="text-end"><strong>Estimate Total</strong></td>
            <td className="text-end"><strong>{currency(grandTotal)}</strong></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableBudgetPrice;
