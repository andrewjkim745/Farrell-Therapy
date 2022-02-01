import React from 'react'
import { Jumbotron, TextContainer, Title } from '..'




export default function About() {



    return (
        <>

            <Jumbotron
                src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp'
            />
            <TextContainer>
                <div class='p-6'>
                    <Title
                        title='Background'
                        additonalClass='has-text-centered'
                    />
                    <p>My career began as a physiological psychologist working on a series of studies mapping reward pathways in the brain.  In 1990, I received my Ph.D. in clinical psychology from Long Island University (Brooklyn campus), in 1998 my post doctoral certification in psychoanalysis from Adelphi University, and in 2000, my post doctoral certification in group psychoananysis from Adelphi University.  My Diplomate (Board Certification) was awarded in 2007.

                        Currently, I am the Director of the Psychotherapy Center at Adelphi University's Post Graduate Program in Psychoanalysis. I am also a training analyst and adjunct professor at Adelphi University's Derner Institute and an adjunct professor in the clinical psychology doctoral program at CW Post.

                        I have presented to psychological associations, analytic institutes, hospital and university seminars. I supervise interns, residents, post doctoral candidates and fellows. My private practice has two locations: Great Neck and Mount Sinai, New York.</p>
                </div>
                
            </TextContainer>
            
        </>
    )
}


