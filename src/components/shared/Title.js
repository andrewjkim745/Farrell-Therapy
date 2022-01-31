import  React from 'react' 





export const Title = ({title, additonalClass, aos, id}) => {
    return <h2 style={{fontFamily: 'Amatic SC'}}id={id} data-aos={aos} data-aos-once='true' class={`${additonalClass} is-size-2-desktop title is-size-6-mobile`}>{title}</h2>
}