export function TodoStats({ data }) {
    return (
        <>
            <h2>Tasks count: {data.length}</h2>
            <p>Currect tasks: 0</p>
            <p>Completed tasks: 0</p>
        </>
    )
}