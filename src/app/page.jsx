'use client'
import StepFive from "@/components/apply-now-form/stepFive";
import StepFour from "@/components/apply-now-form/stepFour";
import StepOne from "@/components/apply-now-form/stepOne";
import StepThree from "@/components/apply-now-form/stepThree";
import StepTwo from "@/components/apply-now-form/stepTwo";
import { cn } from "@/utils";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaUser } from "react-icons/fa6";
import WhatPeopleSay from "@/components/what-people-say/whatPeopleSay";

export default function Home() {
   const [currentStep, setCurrentStep] = useState(1)
   const [userDetails, setUserDetails] = useState({})
   const defaultValues = {
      answer_one: "",
      answer_two: "",
      answer_three: "",
      answer_four: "",
      answer_five: "",
      answer_six: "",
      answer_seven: "",
      answer_eight: "",
      answer_nine: "",
      answer_ten: "",
      answer_eleven: "",
      answer_twelve: "",
      answer_thirteen: "",
      answer_fourteen: "",
      answer_fifteen: "",
      answer_sixteen: "",
      answer_seventeen: "",
      answer_eighteen: "",
      answer_nineteen: "",
      answer_twenty: "",
      answer_twentyone: "",
      answer_twentytwo: "",
      answer_twentythree: "",
      answer_twentyfour: "",
      answer_twentyfive: "",
      termConditions: false
   };
   const schemaValidation = z.object({
      answer_one: z.string(),
      answer_two: z.string(),
      answer_three: z.string(),
      answer_four: z.string(),
      answer_five: z.string(),
      answer_six: z.string(),
      answer_seven: z.string(),
      answer_eight: z.string(),
      answer_nine: z.string(),
      answer_ten: z.string(),
      answer_eleven: z.string(),
      answer_twelve: z.string(),
      answer_thirteen: z.string(),
      answer_fourteen: z.string(),
      answer_fifteen: z.string(),
      answer_sixteen: z.string(),
      answer_seventeen: z.string(),
      answer_eighteen: z.string(),
      answer_nineteen: z.string(),
      answer_twenty: z.string(),
      answer_twentyone: z.string(),
      answer_twentytwo: z.string(),
      answer_twentythree: z.string(),
      answer_twentyfour: z.string(),
      answer_twentyfive: z.string(),
      termConditions: z.boolean().refine((val) => val === true, {
         message: "You must accept the terms and conditions",
      }),
   });
   const { register, handleSubmit, formState: { errors }, } = useForm({
      defaultValues,
      mode: "onSubmit",
      resolver: zodResolver(schemaValidation)
   })
   const onSubmit = (data) => console.log(data)
   return (
      <div className="w-full">
         <div className="w-full bg-cover bg-center py-16" style={{ backgroundImage: 'url("/gpt-footer-background.webp")' }}>
            <div className="w-full max-w-7xl mx-auto px-5">
               <div className="flex flex-wrap md:-m-6">
                  <div className="w-full lg:w-8/12 md:p-6">
                     <p className="text-xl text-white mb-4">We recommend everyone to write their answers in a word document in case of loading failure to avoid data loss.</p>
                     <p className="text-xl text-white mb-4">&quot;<span className="text-[#c02b0a]">*</span>&quot; indicates required fields</p>
                     <div className="w-full py-5">
                        <ol className="w-full relative flex items-center after:content-['']  after:w-full after:h-0.5  after:bg-white after:inline-block after:absolute md:after:top-6 after:left-0">
                           <li className={`flex border-2  ${currentStep === 1 ? 'border-red-500' : 'border-transparent'}  rounded-full p-1 z-10`}>
                              <div className="block whitespace-nowrap z-10">
                                 <span className="w-6 h-6 md:w-10 md:h-10 bg-white border-2 border-transparent rounded-full flex justify-center items-center mx-auto text-sm text-black">
                                    <FaUser size={20} />
                                 </span>
                              </div>
                           </li>
                           <li className={`flex border-2  ${currentStep === 2 ? 'border-red-500' : 'border-transparent'}  rounded-full p-1 ms-4 md:ms-9 z-10`}>
                              <div className="block whitespace-nowrap z-10">
                                 <span className="w-6 h-6 md:w-10 md:h-10 bg-white border-2 border-transparent rounded-full flex justify-center items-center mx-auto text-xl font-medium text-black">2</span>
                              </div>
                           </li>
                           <li className={`flex border-2  ${currentStep === 3 ? 'border-red-500' : 'border-transparent'}  rounded-full p-1 ms-4 md:ms-9 z-10`}>
                              <div className="block whitespace-nowrap z-10">
                                 <span className="w-6 h-6 md:w-10 md:h-10 bg-white border-2 border-transparent rounded-full flex justify-center items-center mx-auto text-xl font-medium text-black">3</span>
                              </div>
                           </li>
                           <li className={`flex border-2  ${currentStep === 4 ? 'border-red-500' : 'border-transparent'}  rounded-full p-1 ms-4 md:ms-9 z-10`}>
                              <div className="block whitespace-nowrap z-10">
                                 <span className="w-6 h-6 md:w-10 md:h-10 bg-white border-2 border-transparent rounded-full flex justify-center items-center mx-auto text-xl font-medium text-black">4</span>
                              </div>
                           </li>
                           <li className={`flex border-2  ${currentStep === 5 ? 'border-red-500' : 'border-transparent'}  rounded-full p-1 ms-4 md:ms-9 z-10`}>
                              <div className="block whitespace-nowrap z-10">
                                 <span className="w-6 h-6 md:w-10 md:h-10 bg-white border-2 border-transparent rounded-full flex justify-center items-center mx-auto text-xl font-medium text-black">5</span>
                              </div>
                           </li>
                        </ol>
                     </div>
                     <div className={cn(`hidden`, { 'block': currentStep === 1 })}>
                        <div className="w-full bg-[#FF727C33] border-[3px] border-[#FF727C] rounded-lg p-2 md:p-10">
                           <StepOne setUserDetails={setUserDetails} next={() => setCurrentStep(prev => prev + 1)} />
                        </div>
                     </div>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={cn(`hidden`, { 'block': currentStep === 2 })}>
                           <StepTwo register={register} prev={() => setCurrentStep(prev => prev - 1)} next={() => setCurrentStep(prev => prev + 1)} />
                        </div>
                        <div className={cn(`hidden`, { 'block': currentStep === 3 })}>
                           <StepThree register={register} prev={() => setCurrentStep(prev => prev - 1)} next={() => setCurrentStep(prev => prev + 1)} />
                        </div>
                        <div className={cn(`hidden`, { 'block': currentStep === 4 })}>
                           <StepFour register={register} prev={() => setCurrentStep(prev => prev - 1)} next={() => setCurrentStep(prev => prev + 1)} />
                        </div>
                        <div className={cn(`hidden`, { 'block': currentStep === 5 })}>
                           <StepFive register={register} prev={() => setCurrentStep(prev => prev - 1)} errors={errors} />
                        </div>
                     </form>
                  </div>
                  <div className="w-full lg:w-4/12 md:p-6">
                     <div className="w-full h-full border-[3px] border-white rounded-xl">
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <WhatPeopleSay /> */}
      </div>
   );
}
