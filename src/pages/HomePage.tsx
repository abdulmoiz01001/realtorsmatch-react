
import HeroSectionComp from '../components/HeroSectionComp'
import OurAppriciationComp from '../components/OurAppriciationComp'
import WhatWeOfferComp from '../components/WhatWeOfferComp'
import OurMissionComp from '../components/OurMissionComp'
import LookAtOurNumbersComp from '../components/LookAtOurNumbersComp'
import WhyChooseUsComp from '../components/WhyChooseUsComp'
import GetLeadsComp from '../components/GetLeadsComp'
import ReviewSliderComp from '../components/ReviewSliderComp'

const HomePage = () => {
    return (
        <>
            <HeroSectionComp />
            <OurAppriciationComp />
            {/* <PropertiesInCitiesComp /> */}
            <WhatWeOfferComp />
            <OurMissionComp />
            <LookAtOurNumbersComp />
            <ReviewSliderComp />
            <WhyChooseUsComp />
            <GetLeadsComp />
        </>
    )
}

export default HomePage