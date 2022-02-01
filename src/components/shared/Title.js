import  React from 'react' 





export const Title = ({title, additonalClass, aos, id}) => {
    return <h1 style={{fontFamily: 'Amatic SC'}}id={id} data-aos={aos} data-aos-once='true' class={`${additonalClass} has-text-weight-light is-size-1-desktop title is-size-4-mobile`}>{title}</h1>
}