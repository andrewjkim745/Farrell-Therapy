import { Title } from './shared/Title'
import { MDBIcon } from "mdbreact";




export const Footer = () => {
    return (
        <footer id='contact' class="bg-light text-center text-lg-start pt-6">
            <Title
                title='Robert A. Farrell, Ph.D., ABPP'
                additonalClass='has-text-centered'
            />
            <div class="container p-5">
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Locations</h5>
                        <p>
                            <i class="fas fa-map-marker-alt me-3"></i>
                            10 Grace Ave Office #6
                            Great Neck, NY 11021
                        </p>
                        <p>
                            <i class="fas fa-map-marker-alt me-3"></i>
                            7 Laura Ct.
                            Mt. Sinai, NY 11766
                        </p>
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Contact</h5>
                        <p>
                            <i class="fas fa-phone me-3"></i>
                            631 891 9715
                        </p>
                        <p><i class="fas fa-envelope me-3"></i>
                            robert@robertfarrelltherapy.com</p>
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 mb-md-0 d-flex justify-content-center">
                    <a href='https://www.linkedin.com/in/robert-a-farrell-ph-d-abpp-9b291a38/' ><MDBIcon fab icon="linkedin-in"  size='5x'></MDBIcon></a>  
                    
                    </div>
                </div>
            </div>
            <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022
                <a class="text-dark" href="https://mdbootstrap.com/"></a>
            </div>

        </footer>
    )
}