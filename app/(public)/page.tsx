import CategoriesSection from '@/components/home/CategoriesSection'
import HeroSection from '@/components/home/HeroSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import PopularCitiesSection from '@/components/home/PopularCitiesSection'
import WhyChooseSection from '@/components/home/WhyChooseSection'
import React from 'react'

export default function page() {
  return (
    <div>
        
        <HeroSection></HeroSection>
        <CategoriesSection></CategoriesSection>
        <WhyChooseSection></WhyChooseSection>
        <HowItWorksSection></HowItWorksSection>
        <PopularCitiesSection></PopularCitiesSection>
         </div>
  )
}
