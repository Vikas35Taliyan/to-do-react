export const Task = (props) => {
    return (
            <div className="addtask-box">
            <h2>{props.taskName}</h2>
            <button className="button-13" onClick={() => props.deleteTask (props.id)}>Delete</button>
            </div>
        );
};