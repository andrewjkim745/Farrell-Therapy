import React from "react";


export const Jumbotron = ({ src }) => {
    return (
        <div data-aos='fade-in'
            class="p-5 text-center bg-image rounded-3 "
            style={{ minHeight: 500, maxHeight: 600, backgroundSize: 'cover', backgroundImage: `url(${src})`}}
        >
            <div class="mask">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-white">
                        <h1 class="mb-3">About</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


