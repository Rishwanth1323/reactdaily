export const CustomList = (props) => {
    const {list} = props;
    return (
        <ol>
        {
            list.map((each,index)=>{
                return (
                    <li key={index}>{each}</li>
                )
            })
        }
        </ol>
    )
}
