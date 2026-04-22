import { Routes, Route, Navigate } from 'react-router-dom';
import CreatePoll from '../pages/CreatePoll';
import ExplorePolls from '../pages/ExplorePolls';
import HowItWorks from '../pages/HowItWorks';

import LandingPage from '../pages/LandingPage';
import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';
import StartBuilding from '../pages/StartBuilding';
import Trending from '../pages/Trending';
import VerifiedResults from '../pages/VerifiedResults';

const Index: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/explore-polls" element={<ExplorePolls />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/verified" element={<VerifiedResults />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/create-poll" element={<CreatePoll />} />
            <Route path="/start-building" element={<StartBuilding />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default Index;