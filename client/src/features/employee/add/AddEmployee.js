import "./addEmployee.css"
import { useAddEmployeeMutation } from "../employeesApiSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const AddEmployee = () => {
    const [addEmployee, { data, isError, error, isSuccess, isLoading }] = useAddEmployeeMutation()
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            navigate("/dash/employees")
        }
    }, [isSuccess])

    const formSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const objEmployee = Object.fromEntries(data.entries())
        console.log(objEmployee);
        addEmployee(objEmployee)
    }
    return (
        <div className="add-employee-container">
            <form onSubmit={formSubmit} className="add-employee-form">
                <input type="text" required name="name" placeholder="שם הנציג" />
                <input type="text" required name="username" placeholder="שם משתמש" />
                <input type="password" required name="password" placeholder="סיסמה" />
                <input type="text" name="phone" placeholder="פלאפון" />
                <input type="email" name="email" placeholder="אימייל" />
                <select name="role" /*id="type/role" */>
                    {/* <option value="">בחר תפקיד</option> */}
                    <option value="נציג">נציג</option>
                    <option value="מנהל">מנהל</option>
                </select>
                <button type="submit">שלח</button>
            </form>

        </div>
    )
}

export default AddEmployee
