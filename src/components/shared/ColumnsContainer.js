import React from 'react'






export const ColumnsContainer = ({ src }) => {
    return  <div class='container pb-6'>
    <div class="columns">
        <div class='column' data-aos='fade-right' data-aos-once='true' data-aos-anchor-placement='top-center'>
            <h5 class='is-size-6-mobile text-primary'>I hope to be able to give you some useful information in your search for a psychotherapist. <b>Therapy is very personal</b> and its success depends, in great part, on the connection between therapist and patient. </h5>
            <p class='is-size-6-mobile lh-lg'>So as you search for a therapist listen to what they say about the therapeutic process. <b>Does it make sense to you? Does their method seem like something you want to get involved in and take the time and expense to pursue?</b>  The therapist you choose should be able to hear what you are struggling with and have a sense if they can help.  Not every therapist can work with every patient.  A good therapist knows their strengths and weaknesses and will tell you at the outset if they have had any previous success with the problem you are presenting. Be discerning, trust your instincts and choose someone who is qualified and with whom you feel confident and safe</p>
            <p class='is-size-6-mobile lh-lg'>If these factors are in place then the treatment can go where it must to help you overcome the obstacles in your way. I have provided you with my <a class='text-primary'>CV</a>, so that you may see all of my education and experience.  Additionally, I have written about the theoretical model I utilize and what you can expect treatment with me to be like. If my ideas and way of working appeal to you, call me, and we can discuss working together. Best wishes in your search.</p>
        </div>
        <div class='column' data-aos='fade-left' data-aos-once='true' data-aos-anchor-placement="top-center">
            <img style={{ height: '50%', objectFit: 'cover'}} className='img-fluid img-thumbnail hover-shadow hover-overlay'src={src}/>
            <p  class='has-text-centered'>Robert Farrell, ABPP, Ph.D</p>
        </div>
    </div>
    </div>
}