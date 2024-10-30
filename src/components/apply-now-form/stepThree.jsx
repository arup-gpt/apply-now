import React from 'react'

const StepThree = ({ register, prev, next }) => {
   return (
      <div className='space-y-4'>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>7. Do you have any personal or professional mentors? If so, please explain who and why.</label>
            <textarea rows={4} {...register('answer_seven')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>8. Please share your favorite quotation, and explain what it means to you personally and/or professionally.</label>
            <textarea rows={4} {...register('answer_eight')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>9. What does confidence mean to you?</label>
            <textarea rows={4} {...register('answer_nine')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>10. Tell us about a challenge or conflict you’ve faced or are currently facing. How did/do you deal with it?</label>
            <textarea rows={4} {...register('answer_ten')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>11. The Roman Stoic philosopher Seneca (4 BC–65 AD) said, “Our fears are always more numerous than our dangers.” What is your biggest fear, and why?</label>
            <textarea rows={4} {...register('answer_eleven')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>12. How do you deal with anxiety or pressure?</label>
            <textarea rows={4} {...register('answer_twelve')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>13. What has been your greatest achievement to date, either personally or professionally?</label>
            <textarea rows={4} {...register('answer_thirteen')} className='form-control etxt-whi
            ' />
         </fieldset>
         <div className="w-full flex justify-end p-2">
            <div className="flex gap-5">
               <button type='button' className='bg-transparent hover:bg-[#E63946] text-base text-white border-2 border-[#E63946] rounded-md py-2 px-4' onClick={prev}>Previous</button>
               <button type='button' className='bg-[#E63946] hover:bg-transparent text-base text-white border-2 border-[#E63946] rounded-md py-2 px-5' onClick={next}>Next</button>
               <button type='button' className='bg-transparent hover:bg-[#E63946] text-base text-white border-2 border-[#E63946] rounded-md py-2 px-4'>Save Changes</button>
            </div>
         </div>
      </div>
   )
}

export default StepThree