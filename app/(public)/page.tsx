import CategoriesSection from '@/components/home/CategoriesSection'
import HeroSection from '@/components/home/HeroSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import PopularCitiesSection from '@/components/home/PopularCitiesSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import WhyChooseSection from '@/components/home/WhyChooseSection'
import { getMe } from '@/utiles/getMe'
import React from 'react'

export default async function page() {
// const user=await getMe()
// console.log(user)
  return (
    <div>
        
        <HeroSection></HeroSection>
        <CategoriesSection></CategoriesSection>
        <WhyChooseSection></WhyChooseSection>
        <HowItWorksSection></HowItWorksSection>
        <PopularCitiesSection></PopularCitiesSection>
        <TestimonialsSection></TestimonialsSection>
         </div>
  )
}
