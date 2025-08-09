import { useState, useEffect } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';

import Header from '../pages/Header';
import Footer from '../pages/Footer';
import Sidenav from '../pages/Sidenav';

import '../../public/styles/racers_index.css';
import driversData from '../data/driversData.json';

import 'primereact/resources/themes/arya-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const RacersPage = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [filteredDrivers, setFilteredDrivers] = useState([]);
  const years = [2020, 2021, 2022, 2023, 2024, 2025];

  const handleYearChange = (e) => {
    const year = e.value;
    setSelectedYear(year);

    const filtered = driversData.map(driver => {
      const teamInfo = driver.teams.find(team => team.years.includes(year));
      if (teamInfo) {
        return {
          name: driver.name,
          team: teamInfo.team,
          poleposition: driver.poleposition,
          wins: driver.wins,
          championships: driver.championships
        };
      }
      return null;
    }).filter(driver => driver !== null);

    setFilteredDrivers(filtered);
  };

  useEffect(() => {
    if (selectedYear == null) {
      handleYearChange({ value: years[0] });
    }
  });

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

          <DataTable
            tableStyle={{ minWidth: '70rem' }}
            value={filteredDrivers}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 20, 25]}
            sortField="wins"
            sortOrder={-1} 
          >
            <Column field="name" header="Driver" sortable style={{ width: '25%' }}/>
            <Column field="team" header="Team" sortable style={{ width: '25%' }}/>
            <Column field="poleposition" header="Pole Positions" sortable style={{ width: '25%' }}/>
            <Column field="wins" header="Wins" sortable style={{ width: '25%' }}/>
            <Column field="championships" header="Championships" sortable style={{ width: '25%' }}/>
          </DataTable>
        </section>
      </main>

      <Sidenav isOpen={sideMenuOpen} onClose={toggleSideMenu} />
      <Footer />
    </div>
  );
};

export default RacersPage;
