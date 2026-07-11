import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import TableSkeleton from '../components/TableSkeleton';

function Inventory() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
  return (
    <div>
      <h1>Inventory</h1>
      <TableSkeleton rows={5} columns={3} />
    </div>
  );
}
  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    let valueA = sortField === 'company' ? a.company.name : a[sortField];
    let valueB = sortField === 'company' ? b.company.name : b[sortField];

    valueA = valueA.toLowerCase();
    valueB = valueB.toLowerCase();

    if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedUsers.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedUsers = sortedUsers.slice(startIndex, startIndex + rowsPerPage);

  const getSortIndicator = (field) => {
    if (sortField !== field) return '';
    return sortDirection === 'asc' ? ' ▲' : ' ▼';
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <h1>Inventory</h1>

      <SearchBar
  value={searchTerm}
  onChange={handleSearchChange}
  placeholder="Search by name..."
/>

      {paginatedUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <>
          <table className="data-table">
            <thead>
              <tr>
                <th onClick={() => handleSort('name')} className="sortable">
                  Name{getSortIndicator('name')}
                </th>
                <th onClick={() => handleSort('email')} className="sortable">
                  Email{getSortIndicator('email')}
                </th>
                <th onClick={() => handleSort('company')} className="sortable">
                  Company{getSortIndicator('company')}
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>

        <Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPrevious={() => setCurrentPage(currentPage - 1)}
  onNext={() => setCurrentPage(currentPage + 1)}
/>
        </>
      )}
    </div>
  );
}

export default Inventory;