import  React from 'react' 





export const Title = ({title, additonalClass, aos}) => {
    return <h2 data-aos={aos} data-aos-once='true' class={`${additonalClass} title is-size-6-mobile has-text-weight-light `}>{title}</h2>
}