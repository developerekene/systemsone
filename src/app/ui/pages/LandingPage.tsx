import React from 'react'
import FeaturesGrid from '../components/FeaturesGrid'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PollTemplates from '../components/PollTemplates'
import PopularPolls from '../components/PopularPolls'
import ProcessWorkflow from '../components/ProcessWorkflow'
import TrustBar from '../components/TrustBar'

const LandingPage: React.FunctionComponent = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <TrustBar />
            <PopularPolls />
            <FeaturesGrid />
            <ProcessWorkflow />
            <PollTemplates />
        </>
    )
}

export default LandingPage