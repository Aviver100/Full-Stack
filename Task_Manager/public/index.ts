import express from "express";

async function handleGetAllTasks() {
    try {
        const response = await fetch("/api/tasks")
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

export async function handleAddTask(event: SubmitEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    try {
        const response = await fetch('/api/tasks/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData)),            
        });
        if (!response.ok) {
            throw new Error('Server error')
        }
        const result = await response.json();
        console.log(result);
    }
    catch(error:any) {
        console.error('Error:', error.message)
    }






    // } catch (error) {

    // }
    // const title = formData.get('title');
    // const description = formData.get('description');
    // const newTask = {title, description}

    // if(response.ok){
    //     console.log('the task added');
    //     messages.push(`the task added ${response}`)
    // }
    // else{
    //     console.log('Failed to added task');
    //     messages.push(`Failed to added task ${response}`)

    // } 
}
