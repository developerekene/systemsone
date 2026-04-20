import { Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import SignIn from '../pages/Signin';

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="//sign-in" element={<SignIn />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default Index;