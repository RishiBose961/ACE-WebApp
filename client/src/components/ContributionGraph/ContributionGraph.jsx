import { useState, useEffect } from 'react';

const ContributionGraph = () => {
  const [contributions, setContributions] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Track the current page (month index)

  // Generate mock data
  const generateMockData = (days) => {
    const data = [];
    const today = new Date();

    for (let i = 0; i < days; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      data.push({
        date: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`,
        count: Math.random() > 0.7 ? 0 : Math.floor(Math.random() * 10), // 30% chance of 0 contributions
      });
    }
    return data.reverse(); // Reverse to start with the oldest date
  };

  const getCurrentMonthIndex = (months) => {
    const today = new Date();
    const currentMonthKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
    return months.findIndex(([monthKey]) => monthKey === currentMonthKey);
  };

  useEffect(() => {
    const mockData = generateMockData(365);
    setContributions(mockData);

    // Calculate current month index
    const groupedMonths = groupByMonth(mockData);

    const initialPage = getCurrentMonthIndex(groupedMonths);
    setCurrentPage(initialPage >= 0 ? initialPage : 0); // Default to the first page if not found
  }, []);

  const getColor = (count) => {
    if (count === 0) return ''; // Return no styling for blank days
    if (count < 3) return 'bg-green-200';
    if (count < 6) return 'bg-green-400';
    return 'bg-green-600';
  };

  const groupByMonth = (data) => {
    const months = {};
    data.forEach((day) => {
      const [year, month] = day.date.split('-');
      const monthKey = `${year}-${month}`;
      if (!months[monthKey]) months[monthKey] = [];
      months[monthKey].push(day);
    });
    return Object.entries(months);
  };

  const monthsData = groupByMonth(contributions);
  const totalPages = monthsData.length;

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const [currentMonth, days] = monthsData[currentPage] || [null, []];

  return (
    <div className="w-full max-w-5xl bg-black/50 rounded-lg shadow-md p-6 relative mx-auto">
      <p className="mb-4 text-center">Month-wise ACE activity</p>

      {currentMonth && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2 text-center">
            {new Date(`${currentMonth}-01`).toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h3>
          <div className="grid grid-cols-7 gap-2">
            {days.map((day) => (
              <div
                key={day.date}
                className={`w-4 h-4 rounded-sm border border-gray-200 ${getColor(day.count)}`}
                title={day.count > 0 ? `Contributions: ${day.count}` : 'No Contributions'}
              >
                {/* Leave the cell blank if no contributions */}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          className={`px-4 py-2 rounded text-black bg-blue-200 ${
            currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-300'
          }`}
          onClick={handlePrevious}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <span className="text-sm text-gray-600">
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          className={`px-4 py-2 rounded text-black bg-blue-200 ${
            currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-300'
          }`}
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContributionGraph;
