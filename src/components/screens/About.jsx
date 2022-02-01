import React from 'react'
import { AltTwoColumns, Jumbotron, TextContainer, Title, TwoColumns} from '..'
import About2 from '../../assets/About2.jpg'
import PrivacyPolicy from '../../assets/PrivacyPolicy.jpeg'
import Oasis from '../../assets/oasis.jpeg'

export default function About() {



    return (
        <>

            <Jumbotron 
                src={PrivacyPolicy}
            />
            <TextContainer>
                <div class='py-6 textAlignJustify'>
                    <Title
                        title='Background'
                        additonalClass='has-text-centered'
                    />
                    <TwoColumns
                    
                    text="My career began as a physiological psychologist working on a series of studies mapping reward pathways in the brain.  In 1990, I received my Ph.D. in clinical psychology from Long Island University (Brooklyn campus), in 1998 my post doctoral certification in psychoanalysis from Adelphi University, and in 2000, my post doctoral certification in group psychoananysis from Adelphi University.  My Diplomate (Board Certification) was awarded in 2007.  

                    Currently, I am the Director of the Psychotherapy Center at Adelphi University's Post Graduate Program in Psychoanalysis. I am also a training analyst and adjunct professor at Adelphi University's Derner Institute and an adjunct professor in the clinical psychology doctoral program at CW Post. 
                    
                    I have presented to psychological associations, analytic institutes, hospital and university seminars. I supervise interns, residents, post doctoral candidates and fellows. My private practice has two locations: Great Neck and Mount Sinai, New York."
                    src={About2}
                    
                    />
                    
                </div>
                
                
            </TextContainer>
            <TextContainer>
            <div class='py-6 textAlignJustify'>
                <Title
                        title='
                        How Therapy Works'
                        additonalClass='has-text-centered'
                    />
                    <AltTwoColumns
                    text="Psychodynamic psychotherapy is a collaborative effort. Therapist and patient enter into a therapeutic relationship designed to reveal and modify maladaptive beliefs and feelings about self and other. This is accomplished by establishing a trusting relationship based on mutual respect and a desire to understand one another. The requirements of the patient are that they come to sessions and speak about what they are thinking or feeling at any given moment. The therapist's responsibility is to listen, use their intellect, training and sensitivity to understand and help reveal the patient's underlying thoughts and feelings.  As this relationship becomes stronger and more trusting the patient's characteristic way of experiencing themself and others emerges in the treatment. 

                    The sessions become a laboratory to examine, in great detail, what the patient believes about themself and the therapist, how this makes them feel and what they do in response to that. The manner in which the patient behaves with the therapist will encapsulate all of their old ideas about self and other. The therapist is trained to uncover the assumptions the patient has about the world that seem to come from an earlier time.  Problems develop when our unconscious beliefs do not match the realities of our life. Then we act out in order to bring the present in line with this old view. This act distorts the present and often spoils it so that we cannot learn from experience but rather repeat the same unsatisfying, self destructive behaviors over and over.  This is the source of the pain, loneliness and inability to make peaceful and growth-promoting contact with others that many patients feel. 
                    
                    This work requires a safe and trusting relationship with a skilled therapist who understands unconscious communications and how to access them. This type of therapy can help the patient live a life free from their ties to the past which perpetuate unhealthy relationships. It promotes the individual's capacity to pursue their own desires and ambitions in a way that is spontaneous and alive. This is the promise psychotherapy offers."
                    src={Oasis}
                    />
                    </div>
                </TextContainer>
        </>
    )
}


