import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
const TagTable = ({ columns, rows, readBook, Sorting }) => {
  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <th key={column.field}>
                  <p>{column.fieldName}</p>
                  <span onClick={() => Sorting(column.field)}>
                    {column.sort ? "↑" : "↓"}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row.id} className={row.read ? "read-books" : ""}>
                <td>{row.id}</td>
                <td>{row.author}</td>
                <td>{row.title}</td>
                <td>{row.section}</td>
                <td>{row.placed}</td>
                <td className={row.read ? "read" : ""}>
                  <input
                    type="checkbox"
                    className="read-button"
                    onClick={() => readBook(row.id)}
                    checked={row.read}
                  ></input>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
export default TagTable;
