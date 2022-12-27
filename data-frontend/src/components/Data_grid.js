import React from "react";
import ReactDOM from "react-dom";
// import "react-data-grid/dist/react-data-grid.css";
// import "@inovua/reactdatagrid-enterprise/index.css";
import axios from "axios";
/* 
Comment above ReactDataGrid import and uncomment below import to see that the issue is fixed
*/
import ReactDataGrid from "fixed-react-data-grid";
import { range } from "lodash";
import "./data-grid.css";

const gridStyle = { minHeight: 850 };
const columns = [
  { key: "id", name: "ID", editable: true },
  { key: "staff_name", name: "Staff Name", editable: true },
  { key: "position", name: "Position", editable: true },
  { key: "age", name: "Age", editable: true },
  { key: "year_joined", name: "Year Joined", editable: true },
];

const rows = [
  { division: 0, title: "Task 1", complete: 20, notes: 20, bunting: 20 },
  { division: 1, title: "Task 2", complete: 40, notes: 20, bunting: 20 },
  { division: 2, title: "Task 3", complete: 60, notes: 20, bunting: 20 },
];
const defaultParsePaste = (str) => {
  console.log(str);
  return str.split(/\r\n|\n|\r/).map((row) => row.split("\t"));
};

const changedValues = {};
class Data_grid extends React.Component {
  constructor(props) {
    super(props);
    const defaultColumnProperties = {
      resizable: true,
      // filterable: true,
      // filterRenderer: AutoCompleteFilter,
      editable: true,
      // sortable: true
    };
    this.state = {
      rows,
      topLeft: {},
      botmRight: {},
      filters: "",
    };

    // Copy paste event handler
    document.addEventListener("copy", this.handleCopy);
    document.addEventListener("paste", this.handlePaste);
    // document.addEventListener('keydown', this.handleEnter);
  }

  componentWillUnmount() {
    this.removeAllListeners();
  }

  removeAllListeners = () => {
    document.removeEventListener("copy", this.handleCopy);
    document.removeEventListener("paste", this.handlePaste);
    // document.removeEventListener('keydown', this.handleEnter);
  };

  rowGetter = (i) => {
    const { rows } = this.state;
    return rows[i];
  };

  updateRows = (startIdx, newRows) => {
    this.setState((state) => {
      const rows = state.rows.slice();
      for (let i = 0; i < newRows.length; i++) {
        if (startIdx + i < rows.length) {
          changedValues[startIdx + i] = {
            ...changedValues[startIdx + i],
            ...newRows[i],
          };
          rows[startIdx + i] = { ...rows[startIdx + i], ...newRows[i] };
        }
      }
      return { rows };
    });
  };

  handleCopy = (e) => {
    console.log(e);
    e.preventDefault();
    const { topLeft, botmRight } = this.state;
    // Loop through each row
    const text = range(topLeft.rowIdx, botmRight.rowIdx + 1)
      .map(
        // Loop through each column
        (rowIdx) =>
          columns
            .slice(topLeft.colIdx, botmRight.colIdx + 1)
            .map(
              // Grab the row values and make a text string
              (col) => this.rowGetter(rowIdx)[col.key]
            )
            .join("\t")
      )
      .join("\n");
    // console.log(text)
    e.clipboardData.setData("text/plain", text);
  };

  handlePaste = (e) => {
    e.preventDefault();
    const { topLeft } = this.state;

    const newRows = [];
    const pasteData = defaultParsePaste(e.clipboardData.getData("text/plain"));

    pasteData.forEach((row) => {
      const rowData = {};
      // Merge the values from pasting and the keys from the columns
      columns
        .slice(topLeft.colIdx, topLeft.colIdx + row.length)
        .forEach((col, j) => {
          // Create the key-value pair for the row
          rowData[col.key] = row[j];
        });
      // Push the new row to the changes
      newRows.push(rowData);
    });

    this.updateRows(topLeft.rowIdx, newRows);
  };
  setSelection = (args) => {
    // console.log(args)
    this.setState({
      topLeft: {
        rowIdx: args.topLeft.rowIdx,
        colIdx: args.topLeft.idx,
      },
      botmRight: {
        rowIdx: args.bottomRight.rowIdx,
        colIdx: args.bottomRight.idx,
      },
    });
  };
  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    const updateRowIndex =  this.state.rows[fromRow].id
    
    axios.patch(`http://localhost:8000/file/api/${updateRowIndex}`,
      updated
      )
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err,'Err');
      })
      this.setState((state) => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
    
  };

  addNewRow = () => {
    var division 
    if(this.state.rows && this.state.rows.length >0)
    {
      division =  this.state.rows[this.state.rows.length - 1].id + 1;
    }else
    division = 1
    
    console.log(division);
    this.setState({
      rows: [...this.state.rows, { id: division, staff_name: "", position: "", age: "", year_joined: "" },],
    });
    axios.post(`http://localhost:8000/file/api/${division}`)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err,'Err');
    })
  };
  // GET request using axios with error handling
  componentDidMount() {
    axios
      .get("http://localhost:8000/file/api/")
      .then((response) => {
        console.log(response.data,'response.data');
        this.setState({ rows: response.data });

      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
      // console.log(this.state.rows);
  }
  render() {
    return (
      <div className="main-table-container">
        <div>
          <button onClick={this.addNewRow}>Add Row</button>
        </div>
        <div>
          <ReactDataGrid
            theme="default-dark"
            columns={columns}
            rowGetter={(i) => this.state.rows[i]}
            rowsCount={this.state.rows.length}
            onGridRowsUpdated={this.onGridRowsUpdated}
            enableCellSelect={true}
            cellRangeSelection={{
              onComplete: this.setSelection,
            }}
            minHeight={600}
          />
        </div>
      </div>
    );
  }
}

export default Data_grid;

