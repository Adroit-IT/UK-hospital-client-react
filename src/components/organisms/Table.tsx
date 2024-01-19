import IconFile from "@icon/IconFile";
import IconPrinter from "@icon/IconPrinter";
import sortBy from "lodash/sortBy";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { useEffect, useState } from "react";
import { downloadExcel } from "react-export-table-to-excel";

interface TableColumn {
  title: string;
  accessor: string;
  sortable: boolean;
}

interface TableDataItem {
  [key: string]: any;
}

interface TableProps {
  filterItems: string[];
  data: TableDataItem[];
  columns: TableColumn[];
}

const Table: React.FC<TableProps> = ({ filterItems, data, columns }) => {
  const PAGE_SIZES = [10, 20, 30, 50, 100];

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [initialRecords, setInitialRecords] = useState(sortBy(data, "id"));
  const [recordsData, setRecordsData] = useState(initialRecords);
  const [search, setSearch] = useState("");
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "id",
    direction: "asc",
  });

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecordsData([...initialRecords.slice(from, to)]);
  }, [page, pageSize, initialRecords]);

  useEffect(() => {
    setInitialRecords(() => {
      return data.filter((item) => {
        return filterItems.some((filter) =>
          item[filter].toString().toLowerCase().includes(search.toLowerCase())
        );
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    const data = sortBy(initialRecords, sortStatus.columnAccessor);
    setInitialRecords(sortStatus.direction === "desc" ? data.reverse() : data);
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortStatus]);

  const header: string[] = columns.map((column) => column.title);

  // Map data to the expected format
  const body:
    | { [key: string]: string | number | boolean }[]
    | (string | number | boolean)[][] = data.map((item) =>
    columns.reduce((acc, column) => {
      acc[column.accessor] = item[column.accessor];
      return acc;
    }, {} as { [key: string]: string | number | boolean })
  );

  const handleDownloadExcel = () => {
    downloadExcel({
      fileName: "table",
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        body,
      },
    });
  };

  const exportTable = (type: string) => {
    const columns: string[] = header;
    const records: TableDataItem[] = data;
    const filename = "table";

    const newVariable: any = window.navigator;

    if (type === "csv") {
      const coldelimiter = ";";
      const linedelimiter = "\n";
      let result = columns
        .map((d) => {
          return capitalize(d);
        })
        .join(coldelimiter);
      result += linedelimiter;
      records.forEach((item) => {
        columns.forEach((d: any, index) => {
          if (index > 0) {
            result += coldelimiter;
          }
          const val = item[d] !== undefined ? item[d] : "";
          result += val;
        });
        result += linedelimiter;
      });

      if (result == null) return;
      if (!result.match(/^data:text\/csv/i) && !newVariable.msSaveOrOpenBlob) {
        const data =
          "data:application/csv;charset=utf-8," + encodeURIComponent(result);
        const link = document.createElement("a");
        link.setAttribute("href", data);
        link.setAttribute("download", filename + ".csv");
        link.click();
      } else {
        const blob = new Blob([result]);
        if (newVariable.msSaveOrOpenBlob) {
          newVariable.msSaveBlob(blob, filename + ".csv");
        }
      }
    } else if (type === "print") {
      let rowhtml = "<p>" + filename + "</p>";
      rowhtml +=
        '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
      columns.forEach((d) => {
        rowhtml += "<th>" + capitalize(d) + "</th>";
      });
      rowhtml += "</tr></thead>";
      rowhtml += "<tbody>";

      records.forEach((item) => {
        rowhtml += "<tr>";
        columns.forEach((d) => {
          const val = item[d] !== undefined ? item[d] : "";
          rowhtml += "<td>" + val + "</td>";
        });
        rowhtml += "</tr>";
      });
      rowhtml +=
        "<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>";
      rowhtml += "</tbody></table>";
      const winPrint: any = window.open(
        "",
        "",
        "left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0"
      );
      winPrint.document.write("<title>Print</title>" + rowhtml);
      winPrint.document.close();
      winPrint.focus();
      winPrint.print();
    } else if (type === "txt") {
      const coldelimiter = ",";
      const linedelimiter = "\n";
      let result = columns
        .map((d) => {
          return capitalize(d);
        })
        .join(coldelimiter);
      result += linedelimiter;
      records.forEach((item) => {
        columns.forEach((d: any, index) => {
          if (index > 0) {
            result += coldelimiter;
          }
          const val = item[d] !== undefined ? item[d] : "";
          result += val;
        });
        result += linedelimiter;
      });

      if (result == null) return;
      if (!result.match(/^data:text\/txt/i) && !newVariable.msSaveOrOpenBlob) {
        const data1 =
          "data:application/txt;charset=utf-8," + encodeURIComponent(result);
        const link1 = document.createElement("a");
        link1.setAttribute("href", data1);
        link1.setAttribute("download", filename + ".txt");
        link1.click();
      } else {
        const blob1 = new Blob([result]);
        if (newVariable.msSaveOrOpenBlob) {
          newVariable.msSaveBlob(blob1, filename + ".txt");
        }
      }
    }
  };

  const capitalize = (text: string) => {
    return text
      .replace("_", " ")
      .replace("-", " ")
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
  };

  return (
    <div>
      <div className="mt-6 panel">
        <div className="flex md:items-center justify-between md:flex-row flex-col mb-4.5 gap-5">
          <div className="flex flex-wrap items-center">
            <button
              type="button"
              onClick={() => exportTable("csv")}
              className="m-1 btn btn-primary btn-sm "
            >
              <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
              CSV
            </button>
            <button
              type="button"
              onClick={() => exportTable("txt")}
              className="m-1 btn btn-primary btn-sm"
            >
              <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
              TXT
            </button>

            <button
              type="button"
              className="m-1 btn btn-primary btn-sm"
              onClick={handleDownloadExcel}
            >
              <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
              EXCEL
            </button>

            <button
              type="button"
              onClick={() => exportTable("print")}
              className="m-1 btn btn-primary btn-sm"
            >
              <IconPrinter className="ltr:mr-2 rtl:ml-2" />
              PRINT
            </button>
          </div>

          <input
            type="text"
            className="w-auto form-input"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="datatables">
          <DataTable
            highlightOnHover
            className="whitespace-nowrap table-hover"
            records={recordsData}
            columns={columns}
            totalRecords={initialRecords.length}
            recordsPerPage={pageSize}
            page={page}
            onPageChange={(p) => setPage(p)}
            recordsPerPageOptions={PAGE_SIZES}
            onRecordsPerPageChange={setPageSize}
            sortStatus={sortStatus}
            onSortStatusChange={setSortStatus}
            minHeight={200}
            paginationText={({ from, to, totalRecords }) =>
              `Showing  ${from} to ${to} of ${totalRecords} entries`
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
