export const Images = (props) =>{
    const {src:s="bla",h=200,w=200} = props;
    return(
        <img src={s} height={h} width={w} />
    )
}