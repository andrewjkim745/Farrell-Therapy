import  React from 'react' 





export const Title = ({title, additonalClass}) => {
    return <h2 data-aos='fade-up' data-aos-once='true' class={`${additonalClass} title is-size-5-mobile has-text-weight-light `}>{title}</h2>
}