function DataTable({ columns, rows, emptyMessage = 'No data available' }) {
  if (!rows.length) {
    return (
      <p className="rounded-md border border-dashed border-edge bg-surface-1 p-8 text-center text-sm text-subtle">
        {emptyMessage}
      </p>
    )
  }

  return (
    <div className="overflow-x-auto rounded-md border border-edge-subtle">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-edge-subtle bg-surface-2">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-3 font-mono text-xs uppercase tracking-[0.1em] text-subtle"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={row.id ?? rowIndex}
              className="border-b border-edge-subtle last:border-0 transition-colors duration-base ease-standard hover:bg-surface-2"
            >
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-3 text-muted">
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
