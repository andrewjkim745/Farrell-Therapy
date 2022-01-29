import { Title } from './shared/Title'





export const Footer = () => {
    return (
        <footer class="bg-light text-center text-lg-start pt-6">
            <Title
                title='Robert A. Farrell, Ph.D., ABPP'
                additonalClass='has-text-centered'
            />
            <div class="container p-4">
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0 has-text-centered">
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
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0 has-text-centered">
                        <h5 class="text-uppercase">Contact</h5>
                        <p>
                            631-891-9715
                        </p>
                        <p>robert@robertfarrelltherapy.com</p>
                    </div>
                </div>
            </div>
            <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
                <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>

        </footer>
    )
}