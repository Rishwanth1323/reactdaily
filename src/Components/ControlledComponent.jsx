import React, { useState } from 'react'

export default function ControlledComponent() {
    const initialFormData = { email: "", password: "" };
    const [form, setForm] = useState(initialFormData);
    const [arr, setArr] = useState([]);
    const [update, setUpdate] = useState(false);
    const [updateIndex, setUpdateIndex] = useState(null);

    const handler = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (form.email && form.password) {
            if (update) {
                setArr(arr.map((item, index) => (index === updateIndex ? form : item)));
                setUpdate(false);
                setUpdateIndex(null);
            } else {
                setArr([...arr, form]);
            }
            setForm(initialFormData);
        } else {
            alert("Please fill all details");
        }
    }

    const handlerBtn = (index, e) => {
        if (e.target.name === "delete") {
            setArr(arr.filter((_, j) => j !== index));
        } else if (e.target.name === "update") {
            setForm(arr[index]);
            setUpdate(true);
            setUpdateIndex(index);
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={form.email}
                    onChange={handler}
                    name="email"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handler}
                    name="password"
                />
                <button type="submit">
                    {update ? 'Update' : 'Submit'}
                </button>
            </form>

            {arr.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((each, index) => (
                            <tr key={index}>
                                <td>{each.email}</td>
                                <td>{each.password}</td>
                                <td>
                                    <button name='delete' onClick={(e) => handlerBtn(index, e)}>DELETE</button>
                                    <button name='update' onClick={(e) => handlerBtn(index, e)}>UPDATE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
