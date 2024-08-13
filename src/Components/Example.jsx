export const Example = (props) => {
    const { children,content } = props;
    return(
        <h1>{children} ,                     {content}</h1>
    )
}