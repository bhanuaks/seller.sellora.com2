// components/StickyExcelTable.js
'use client';

import { useRef } from 'react';
import * as XLSX from 'xlsx';

const StickyExcelTable = ({ rows }) => {
  const tableRef = useRef();

  const exportToExcel = () => {
    const ws = XLSX.utils.table_to_sheet(tableRef.current);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Flipkart_Data.xlsx');
  };

  return (
    <div className="overflow-auto max-w-full border border-gray-300">
      <button
        className="mb-2 px-4 py-2 bg-green-600 text-white rounded"
        onClick={exportToExcel}
      >
        Export to Excel
      </button>
      <table ref={tableRef} className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="sticky left-0 z-10 bg-gray-300 border px-4 py-2 w-64">
              Flipkart Serial Number
            </th>
            <th className="sticky left-64 z-10 bg-gray-300 border px-4 py-2 w-64">
              Catalog QC Status
            </th>
            <th className="sticky left-[32rem] z-10 bg-gray-300 border px-4 py-2 w-64">
              QC Failed Reason (if any)
            </th>
            <th className="border px-4 py-2">Seller SKU ID</th>
            <th className="border px-4 py-2">Listing Status</th>
            <th className="border px-4 py-2">MRP</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
              style={{ height: '40px' }}
            >
              <td className="sticky left-0 bg-white border px-4 py-2 w-64 z-0">
                {row.serial}
              </td>
              <td className="sticky left-64 bg-white border px-4 py-2 w-64 z-0">
                {row.qcStatus}
              </td>
              <td className="sticky left-[32rem] bg-white border px-4 py-2 w-64 z-0">
                {row.qcReason}
              </td>
              <td className="border px-4 py-2">{row.sku}</td>
              <td className="border px-4 py-2">{row.status}</td>
              <td className="border px-4 py-2">{row.mrp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StickyExcelTable;
