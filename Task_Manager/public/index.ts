async function handleGetAllTasks(event) {
    try {
        const response = await fetch("/api/tasks")
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}