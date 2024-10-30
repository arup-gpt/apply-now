'use client'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import countryList from '@/data/country';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from 'next/link';

const StepOne = ({ setUserDetails, next }) => {
   const defaultValues = { firstName: "", lastName: "", email: "", age: null, country: '', phone: '', gender: "", pronouns: "", position: "" };
   const schemaValidation = z.object({
      firstName: z.string().min(2, "This field is required. Please Enter Your FirstName."),
      lastName: z.string().min(2, "This field is required. Please Enter Your LastName."),
      email: z.string().email("Please enter a valid email address."),
      age: z.number().min(1, "Enter your age"),
      country: z.string().min(2, "This field is required. Please Enter Your Country."),
      phone: z.string().min(10, "Please enter a valid phone number."),
      gender: z.string().min(2, "This field is required."),
      pronouns: z.string().min(1, "This field is required."),
      position: z.string().min(1, "This field is required."),
   });
   const { register, control, handleSubmit, watch, formState: { errors }, } = useForm({
      defaultValues,
      mode: "onSubmit",
      resolver: zodResolver(schemaValidation)
   })
   const onSubmit = (data) => {
      setUserDetails(data);
      next();
      console.log(data)
   }
   return (
      <div className='w-full p-2'>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap -m-2">
               <fieldset className='w-full p-2'>
                  <label className='text-base text-white font-medium mb-1'>Name<span className="text-[#c02b0a] ms-1">*</span></label>
               </fieldset>
               <fieldset className='w-full md:w-6/12 p-2'>
                  <label htmlFor="firstName" className='block text-base text-white font-medium mb-1'>First Name</label>
                  <input type="text" {...register('firstName')} className='form-control text-white' />
                  {errors.firstName && <p className='text-sm text-red-500 mt-1'>{errors.firstName.message}</p>}
               </fieldset>
               <fieldset className='w-full md:w-6/12 p-2'>
                  <label htmlFor="lastName" className='block text-base text-white font-medium mb-1'>Last Name</label>
                  <input type="text" {...register('lastName')} className='form-control text-white' />
                  {errors.lastName && <p className='text-sm text-red-500 mt-1'>{errors.lastName.message}</p>}
               </fieldset>
               <fieldset className='w-full md:w-6/12 p-2'>
                  <label htmlFor="email" className='block text-base text-white font-medium mb-1'>Email<span className="text-[#c02b0a] ms-1">*</span></label>
                  <input type="text" {...register('email')} className='form-control text-white' />
                  {errors.email && <p className='text-sm text-red-500 mt-1'>{errors.email.message}</p>}
               </fieldset>
               <fieldset className='w-full md:w-6/12 p-2'>
                  <label htmlFor="age" className='block text-base text-white font-medium mb-1'>Age<span className="text-[#c02b0a] ms-1">*</span></label>
                  <input type="number" min={0} max={100} {...register('age', {
                     valueAsNumber: true
                  })} className='form-control text-white' />
                  {errors.age && <p className='text-sm text-red-500 mt-1'>{errors.age.message}</p>}
               </fieldset>
               <fieldset className='w-full md:w-6/12 p-2'>
                  <label htmlFor="country" className='block text-base text-white font-medium mb-1'>Country<span className="text-[#c02b0a] ms-1">*</span></label>
                  <select {...register('country')} className='form-control text-white'>
                     <option value="" className='text-black'>Select Your country</option>
                     {
                        countryList?.map((country, index) =>
                           <option key={index} value={country.code} className='text-black'>{country.name}</option>
                        )
                     }
                  </select>
                  {errors.country && <p className='text-sm text-red-500 mt-1'>{errors.country.message}</p>}
               </fieldset>
               <fieldset className='w-full md:w-6/12 p-2'>
                  <label htmlFor="phone" className='block text-base text-white font-medium mb-1'>Phone<span className="text-[#c02b0a] ms-1">*</span></label>
                  <Controller
                     name="phone"
                     control={control}
                     render={({ field: { onChange, value } }) =>
                        <PhoneInput
                           value={value}
                           onChange={onChange}
                           placeholder="Enter phone number"
                        />
                     }
                  />

                  {errors.phone && <p className='text-sm text-red-500 mt-1'>{errors.phone.message}</p>}
               </fieldset>
               <fieldset className='w-full md:w-6/12 p-2'>
                  <label htmlFor="gender" className='block text-base text-white font-medium mb-1'>Gender<span className="text-[#c02b0a] ms-1">*</span></label>
                  <select {...register('gender')} className='form-control text-white'>
                     <option value="" className='text-black'>Select</option>
                     <option value="Woman" className='text-black'>Woman</option>
                     <option value="Man" className='text-black'>Man</option>
                     <option value="Trans Woman" className='text-black'>Trans Woman</option>
                     <option value="Trans Man" className='text-black'>Trans Man</option>
                     <option value="Gender Queer" className='text-black'>Gender Queer</option>
                     <option value="Gender Fluid" className='text-black'>Gender Fluid</option>
                     <option value="Prefer Not To Disclose" className='text-black'>Prefer Not To Disclose</option>
                  </select>
                  {errors.gender && <p className='text-sm text-red-500 mt-1'>{errors.gender.message}</p>}
               </fieldset>
               <fieldset className='w-full md:w-6/12 p-2'>
                  <label htmlFor="pronouns" className='block text-base text-white font-medium mb-1'>Pronouns I identify with<span className="text-[#c02b0a] ms-1">*</span></label>
                  <div className="flex flex-wrap">
                     <div className="w-6/12">
                        <label htmlFor="he_him" className='flex items-center gap-2 cursor-pointer'>
                           <input type="radio" id='he_him' value="He/Him" {...register('pronouns')} />
                           <span className='text-white'>He/Him</span>
                        </label>
                     </div>
                     <div className="w-6/12">
                        <label htmlFor="she_her" className='flex items-center gap-2 cursor-pointer'>
                           <input type="radio" id='she_her' value="She/her" {...register('pronouns')} />
                           <span className='text-white'>She/Her</span>
                        </label>
                     </div>
                     <div className="w-6/12">
                        <label htmlFor="they_them" className='flex items-center gap-2 cursor-pointer'>
                           <input type="radio" id='they_them' value="They/Them" {...register('pronouns')} />
                           <span className='text-white'>They/Them</span>
                        </label>
                     </div>
                  </div>
                  {errors.pronouns && <p className='text-sm text-red-500 mt-1'>{errors.pronouns.message}</p>}
               </fieldset>
               <fieldset className='w-full md:w-6/12 p-2'>
                  <label htmlFor="position" className='block text-base text-white font-medium mb-1'>What position are you applying for?<span className="text-[#c02b0a] ms-1">*</span></label>

                  <select {...register('position')} className='form-control text-white'>
                     <option className='text-black' value="" >Select</option>
                     <option className='text-black' value="64638b401728683bd29f13a8">Assistant to CEO</option>
                     <option className='text-black' value="658905011728683bd24774c2">Business Development</option>
                     <option className='text-black' value="61c41f89864f4104931006df">CFA Candidates, Finance &amp; Investments</option>
                     <option className='text-black' value="61c41f02f2941a043a841224">Content Creator</option>
                     <option className='text-black' value="61baed1913f36f317e7f88c0">Content Writer</option>
                     <option className='text-black' value="658904f31728683bd247703a">Customer Service</option>
                     <option className='text-black' value="61c41f34864f4104931006cb">Designer - Graphic</option>
                     <option className='text-black' value="61c41f94864f4104931006e3">Digital Marketing</option>
                     <option className='text-black' value="66b7db6eba67096ab4cfb265">Entrepreneur in Residence (EIR)</option>
                     <option className='text-black' value="645bf47e1728683bd2ea1d3a">Executive Assistant to CEO</option>
                     <option className='text-black' value="62e184a6f8a325405cc90dcd">Girl Power USA, Volunteer</option>
                     <option className='text-black' value="66799bdfc1e7531cc50a75f8">Human Resource Intern</option>
                     <option className='text-black' value="631b1e169b69ba60b36234c6">Human Resources</option>
                     <option className='text-black' value="655e42a71728683bd231555f">Legal Applicant- Brazil</option>
                     <option className='text-black' value="61c4200a864f410493100707">Legal Associate</option>
                     <option className='text-black' value="61c41fe2864f4104931006fb">Marketing &amp; PR</option>
                     <option className='text-black' value="66b3525bba67096ab43725fa">Performance Marketing Specialist</option>
                     <option className='text-black' value="61c41fab864f4104931006eb">Public Relations</option>
                     <option className='text-black' value="6384c99b126e906fa8033926">Sales Associate</option>
                     <option className='text-black' value="61c41ff1864f4104931006ff">Social Impact</option>
                     <option className='text-black' value="61c41fda864f4104931006f7">Social Media</option>
                     <option className='text-black' value="61c41fbb864f4104931006ef">Video Editor</option>
                  </select>

                  {errors.position && <p className='text-sm text-red-500 mt-1'>{errors.position.message}</p>}
               </fieldset>
               <fieldset className='w-full p-2'>
                  <label htmlFor="" className='block text-base text-white font-medium mb-2'>Upload Docs</label>
                  <input type="file" accept=".doc, .docx, .pdf" className='text-white w-full' />
               </fieldset>
               <div className="w-full text-white p-2 space-y-3">
                  <p>Accepted file types: docx, doc, pdf, Max. file size: 5 MB.</p>
                  <p>Kindly upload relevant documents for your work samples, your resume, or your CV here.</p>
                  <p>If you are facing issue with submitting form online, kindly answer the questions in a word <Link href='https://girlpowertalk.com/wp-content/uploads/2024/04/Girl-Power-Talk-Questionnaire.docx' className='font-medium underline'>document</Link> and email us at info@girlpowertalk.com along with your resume.</p>
               </div>
               <div className="w-full flex justify-end p-2">
                  <div className="flex gap-5">
                     <button type="submit" className='bg-[#E63946] hover:bg-transparent text-base text-white border-2 border-[#E63946] rounded-md py-2 px-5'>Next</button>
                     <button type="submit" className='bg-transparent hover:bg-[#E63946] text-base text-white border-2 border-[#E63946] rounded-md py-2 px-4'>Save Changes</button>
                  </div>
               </div>
            </div>
         </form>
      </div>
   )
}

export default StepOne



