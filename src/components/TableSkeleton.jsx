function TableSkeleton({ rows = 5, columns = 3 }) {
  return (
    <table className="data-table">
      <tbody>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <td key={colIndex}>
                <div className="skeleton-bar"></div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableSkeleton;