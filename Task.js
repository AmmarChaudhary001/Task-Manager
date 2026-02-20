const getTask = document.querySelector("#getTask");
const save_btn = document.querySelector(".save");
const dateInput = document.querySelector("#date");
const statusSelect = document.querySelector("#choice"); 
const Table=document.querySelector("#tableBody");
const search=document.querySelector("#search");
const search_bth=document.querySelector("#search_btn");


let storage_Arr=JSON.parse(localStorage.getItem("tasks")) ||[];


const reset=()=>{
    getTask.value="";
    dateInput.value="";
    statusSelect.value="";
}

save_btn.addEventListener("click", (evt) => {
    evt.preventDefault();

    const task_input=getTask.value;
    const selectedDate = dateInput.value;
    const selectedStatus = statusSelect.value;


    const task_data = {
        taskName: task_input,
        taskDate: selectedDate,
        status: selectedStatus
    };

    if (!task_input || !selectedDate ||!selectedStatus) {
        alert("Please fill all fields");
        return;
    }
    storage_Arr.push(task_data);
    localStorage.setItem("tasks", JSON.stringify(storage_Arr));

    setTimeout(() => {
    create_Table(storage_Arr);
}, 1000);

    reset();
});


const Del_Task=(index)=>{
    storage_Arr.splice(index,1);
    localStorage.setItem("tasks", JSON.stringify(storage_Arr));
    create_Table(storage_Arr);
}

/* const pendArr=()=>{
    let pending_arr=storage_Arr.filter((evt)=>{
        let search_pend=evt.target.value;
        if(search_pend==="Pending"){

        }
    })
} */

const create_Table=(storage_Arr)=>{
    Table.innerHTML="";

    for(let [index,task] of storage_Arr.entries()){
        let row=document.createElement("tr");
        
        let name_cell=document.createElement("td");
        name_cell.innerText=task.taskName;

        let date_cell=document.createElement("td");
        date_cell.innerText=task.taskDate;

        let status_cell=document.createElement("td");
        status_cell.innerText=task.status;

       let action_cell=document.createElement("td");
       let action_btn=document.createElement("button");
       action_btn.innerText="Remove";

       action_btn.addEventListener("click",(evt)=>{
            evt.preventDefault();
            Del_Task(index);
       });

       action_btn.classList.add("btnStyle");
       action_cell.appendChild(action_btn);
       
       row.append(name_cell,date_cell,status_cell, action_cell)
        /* row.appendChild(name_cell);
        row.appendChild(date_cell);
        row.appendChild(status_cell); */

        Table.appendChild(row);

    }
};

search_bth.addEventListener("click",(evt)=>{
    
    evt.preventDefault();

    let search_val=search.value;
    if(search_val==="All"){
        return setTimeout(() => {
    create_Table(storage_Arr);
}, 1000);

    }
    else if(search_val==="Pending"){
        let pending_arr=storage_Arr.filter((task)=>{
            return task.status==="Pending";
        });
        setTimeout(() => {
    create_Table(pending_arr);
}, 1000);

    }
    else{
        let complete_arr=storage_Arr.filter((task)=>{
            return task.status==="Completed";
})
     setTimeout(() => {
    create_Table(complete_arr);
}, 1000);

}
})


