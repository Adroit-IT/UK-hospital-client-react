import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";

interface TableColumn {
  accessor: string;
  title: string;
}

interface TableDataItem {
  [key: string]: Record<string, undefined>;
}

interface TableProps {
  title: string;
  filterItems: string[];
  data: TableDataItem[];
  columns: TableColumn[];
}

const Table: React.FC<TableProps> = ({ title, filterItems, data, columns }) => {
  const PAGE_SIZES = [10, 20, 30, 50, 100];

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [initialRecords, setInitialRecords] = useState(data);
  const [recordsData, setRecordsData] = useState(initialRecords);
  const [search, setSearch] = useState("");

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

  return (
    <div className="panel">
      <div className="flex items-center justify-between mb-5">
        <h5 className="text-lg font-semibold dark:text-white-light">{title}</h5>
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
          striped
          className="whitespace-nowrap table-striped"
          records={recordsData}
          columns={columns}
          totalRecords={initialRecords.length}
          recordsPerPage={pageSize}
          page={page}
          onPageChange={(p) => setPage(p)}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={setPageSize}
          minHeight={200}
          paginationText={({ from, to, totalRecords }) =>
            `Showing  ${from} to ${to} of ${totalRecords} entries`
          }
        />
      </div>
    </div>
  );
};

export default Table;
