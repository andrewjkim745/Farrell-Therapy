import React from "react";


export const JumbotronPage = () => {
    return (
        <div
            class="p-5 text-center bg-image rounded-3"
            style={`
     background-image: url(${src});
        : 400px;
     `}
        >
            <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-white">
                        <h1 class="mb-3">Heading</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


