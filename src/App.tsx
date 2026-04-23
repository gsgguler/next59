import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './components/ui/Toast';
import ProtectedRoute from './components/auth/ProtectedRoute';
import PublicRoute from './components/auth/PublicRoute';
import DashboardLayout from './components/layout/DashboardLayout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardHome from './pages/DashboardHome';
import MatchListPage from './pages/MatchListPage';
import PredictionsListPage from './pages/PredictionsListPage';
import PredictionDetailPage from './pages/PredictionDetailPage';
import DebatesListPage from './pages/DebatesListPage';
import DebateDetailPage from './pages/DebateDetailPage';
import AdminPage from './pages/AdminPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import PlaceholderPage from './pages/PlaceholderPage';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <Routes>
            <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
            <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />

            <Route
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardHome />} />
              <Route path="matches" element={<MatchListPage />} />
              <Route path="predictions" element={<PredictionsListPage />} />
              <Route path="predictions/:id" element={<PredictionDetailPage />} />
              <Route path="debates" element={<DebatesListPage />} />
              <Route path="debates/:predictionId" element={<DebateDetailPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="news" element={<PlaceholderPage title="Haberler" />} />
            </Route>

            <Route
              path="/admin"
              element={
                <ProtectedRoute requireAdmin>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminPage />} />
            </Route>
          </Routes>
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
