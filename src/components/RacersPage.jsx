import { useState } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';

import Header from '../pages/Header';
import Footer from '../pages/Footer';
import Sidenav from '../pages/Sidenav';

import '../../public/styles/racers_index.css';
import '../data/driversData.json'

const driversData = [
  { name: 'Lewis Hamilton', year: 2020, team: 'Mercedes' },
  { name: 'Valtteri Bottas', year: 2020, team: 'Mercedes' },
  { name: 'Max Verstappen', year: 2020, team: 'Red Bull Racing' },
  { name: 'Charles Leclerc', year: 2021, team: 'Ferrari' },
  { name: 'Sebastian Vettel', year: 2021, team: 'Aston Martin' },
  { name: 'Lando Norris', year: 2021, team: 'McLaren' },
  { name: 'Max Verstappen', year: 2022, team: 'Red Bull Racing' },
  { name: 'Sergio Perez', year: 2022, team: 'Red Bull Racing' },
  { name: 'Lewis Hamilton', year: 2023, team: 'Mercedes' },
  { name: 'George Russell', year: 2023, team: 'Mercedes' },
  { name: 'Charles Leclerc', year: 2023, team: 'Ferrari' },
  { name: 'Max Verstappen', year: 2023, team: 'Red Bull Racing' },
  { name: 'Lando Norris', year: 2024, team: 'McLaren' },
  { name: 'Sergio Perez', year: 2024, team: 'Red Bull Racing' },
  { name: 'Charles Leclerc', year: 2025, team: 'Ferrari' },
  { name: 'Max Verstappen', year: 2025, team: 'Red Bull Racing' }
];

const RacersPage = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [filteredDrivers, setFilteredDrivers] = useState([]);
  const years = [2020, 2021, 2022, 2023, 2024, 2025];

  const handleYearChange = (e) => {
    setSelectedYear(e.value);
    const filtered = driversData.filter((driver) => driver.year === e.value);
    setFilteredDrivers(filtered);
  };

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  return (
    <div>
      <Header />
      <main>
      <section className="list">
        <h1>F1 RACERS</h1>
        <Dropdown
        value={selectedYear}
        options={years}
        onChange={handleYearChange}
        placeholder="Select Year"
        className="p-mb-3"
      />

      {/* Display the DataTable with paginable results */}
      <DataTable
        value={filteredDrivers}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 20]}
        emptyMessage="No drivers found for the selected year."
      >
        <Column field="name" header="Driver" />
        <Column field="team" header="Team" />
      </DataTable>
        </section>
      </main>

      <Sidenav isOpen={sideMenuOpen} onClose={toggleSideMenu} />

      <Footer />
    </div>
  );
};

export default RacersPage;