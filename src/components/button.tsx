const MyButton: React.FC<any> = ({ clickBtn,children }) => {
    return (
        <div>
            <button onClick={clickBtn}>{children}</button>
            <div>{Math.random()}</div>
        </div>
    )
}
export default MyButton