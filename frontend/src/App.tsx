import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SecureAccess from './pages/SecureAccess';
import Dashboard from './pages/Dashboard';
import AssetTransfers from './pages/AssetTransfers';
import AssetDelivery from './pages/AssetDelivery';
import UserOffboarding from './pages/UserOffboarding';
import SoftwareLicenses from './pages/SoftwareLicenses';
import PrinterMaintenanceLog from './pages/PrinterMaintenanceLog';
import PrinterManagement from './pages/PrinterManagement';
import UserProfile from './pages/UserProfile';
import AssetAudit from './pages/AssetAudit';
import PhoneDelivery from './pages/PhoneDelivery';
import AccessoryDispatch from './pages/AccessoryDispatch';
import AdvancedReports from './pages/AdvancedReports';
import AppLayout from './layouts/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/secure-access" element={<SecureAccess />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/asset-transfers" element={<AssetTransfers />} />
          <Route path="/asset-delivery" element={<AssetDelivery />} />
          <Route path="/user-offboarding" element={<UserOffboarding />} />
          <Route path="/software-licenses" element={<SoftwareLicenses />} />
          <Route path="/printer-maintenance" element={<PrinterMaintenanceLog />} />
          <Route path="/printer-management" element={<PrinterManagement />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/asset-audit" element={<AssetAudit />} />
          <Route path="/phone-delivery" element={<PhoneDelivery />} />
          <Route path="/accessory-dispatch" element={<AccessoryDispatch />} />
          <Route path="/advanced-reports" element={<AdvancedReports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
