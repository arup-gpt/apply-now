import React from 'react'

const StepFour = ({ register, prev, next }) => {
   return (
      <div className=' space-y-4'>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>14. What skills do you hope to develop if you join Girl Power Talk?</label>
            <textarea rows={4} {...register('answer_fourteen')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>15. What do you feel is the most concerning issue for women today in the world or your home country? How would you work to drive change in this area if you were afforded the necessary power and resources?</label>
            <textarea rows={4} {...register('answer_fifteen')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>16. What is your favorite book, and why?</label>
            <textarea rows={4} {...register('answer_sixteen')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>17. Share one interesting fact about yourself that we might not otherwise know in evaluating your candidacy to join Girl Power Talk.</label>
            <textarea rows={4} {...register('answer_seventeen')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>18. Name a woman other than your mother or sister who has influenced your life. Describe how she has done so.</label>
            <textarea rows={4} {...register('answer_eighteen')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>19. Anne Frank (1929–1945) wrote, “How wonderful it is that nobody need wait a single moment before starting to improve the world.” How does this quotation resonate with you?</label>
            <textarea rows={4} {...register('answer_nineteen')} className='form-control text-white' />
         </fieldset>
         <fieldset>
            <label htmlFor="" className='block text-base text-white font-medium mb-2'>20. How do you spend most of your free time (e.g., hobbies, interests)?</label>
            <textarea rows={4} {...register('answer_twenty')} className='form-control text-white' />
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

export default StepFour