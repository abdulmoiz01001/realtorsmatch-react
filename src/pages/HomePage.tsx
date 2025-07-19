
import HeroSectionComp from '../components/HeroSectionComp'
import OurAppriciationComp from '../components/OurAppriciationComp'
import WhatWeOfferComp from '../components/WhatWeOfferComp'
import OurMissionComp from '../components/OurMissionComp'
import LookAtOurNumbersComp from '../components/LookAtOurNumbersComp'
import WhyChooseUsComp from '../components/WhyChooseUsComp'
import GetLeadsComp from '../components/GetLeadsComp'
import ReviewsComp from '../components/ReviewsComp'

const HomePage = () => {
    return (
        <>
            <HeroSectionComp />
            <OurAppriciationComp />
            {/* <PropertiesInCitiesComp /> */}
            <WhatWeOfferComp />
            <OurMissionComp />
            <LookAtOurNumbersComp />
            <ReviewsComp />
            <WhyChooseUsComp />
            <GetLeadsComp />
        </>
    )
}

export default HomePage