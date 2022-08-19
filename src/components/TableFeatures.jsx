import { useAtom } from "jotai";
import { featuresAtom } from "../states";

const TableFeatures = () => {
  const [features] = useAtom(featuresAtom);
  return (
    <>
      <h3 className="section-title">Features</h3>
      <table className="table">
        <tbody>
          {features.map((feature, index) => (
            <tr key={index}>
              <td>{feature}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableFeatures;
