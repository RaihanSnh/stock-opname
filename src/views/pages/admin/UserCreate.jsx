import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

export default function UserCreate() {  
    const [ein, setEin] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);
    const [role, setRole] = useState('admin');
    const [gender, setGender] = useState('male');
    const [dob, setDOB] = useState('0000-00-00');
    const navigate = useNavigate();
    
    const [no, setNo] = useState(() => {
        const storedNo = localStorage.getItem('storedNo');
        return storedNo ? parseInt(storedNo, 10) : 1;
    });

    const roles = {
        admin: '1',
        warehouse_staff: '2',
        requester: '3'
    };

    const genders = {
        'male': '1',
        'female': '2',
    };

    function generateCode(index) {
        const paddedNo = String(index).padStart(3, '0');
        const formattedDOB = dob.split('-').join('-');
        return `${formattedDOB}-${genders[gender]}-${roles[role]}-${paddedNo}`;
    }

    const code = generateCode(no);

    const handleChangeEin = (e) => {
        setEin(e.target.value);
    };
    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleChangeRole = (e) => {
        setRole(e.target.value);
    };
    const handleChangeImage = (e) => {
        setImage(e.target.files[0]);
    };
    const handleChangeDOB = (e) => {
        setDOB(e.target.value);
    };  
    const handleChangegender = (e) => {
        setGender(e.target.value);
    };  

    const handleSubmit = async (e) => {
        e.preventDefault();

        const code = generateCode(no).replace(/-/g, '');
      
        const formData = new FormData();
        formData.append('ein', code);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('role', role);
        formData.append('dob', dob);
        formData.append('gender', gender);
        formData.append('image', image);

        await axios.post('http://127.0.0.1:8000/api/admin/user', formData, { 
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then(response => {
            console.log(response);
            const newNo = no + 1;
            localStorage.setItem('storedNo', newNo);
            setNo(newNo);
            navigate(-1);
        }).catch(error => {
            console.error(error);
        });
    }

    return(
        <>
            <div className="pb-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-medium">Buat User</h1>
                    <Link to="/" className="p-2 px-4 gap-2 bg-sky-500 text-white rounded flex items-center font-medium hover:bg-sky-600 transition duration-300 ease-in-out">
                        <svg className="w-3.5 h-3.5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        <span>Kembali</span>
                    </Link>
                </div>
            </div>
            <div className="">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex space-x-4">
                        <div className="space-y-4 flex-1 flex-col">
                            <div className="group flex items-center">
                                <label htmlFor="kode" className="w-64">Kode</label>
                                <input type="text" className="w-full border rounded p-2 border-gray-300 outline-none cursor-not-allowed" 
                                value={code}
                                onChange={handleChangeEin} 
                                readOnly 
                                disabled/>
                            </div>
                            <div className="group flex">
                                <label htmlFor="Gambar" className="w-64">Gambar</label>
                                <div className="w-full h-full">
                                    <label for="dropzone-file" className="w-72 flex flex-col items-center justify-center border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-6 h-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Pilih Gambar</span></p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Format file jpg atau png</p>
                                        </div>
                                        <input 
                                            className="hidden" 
                                            id="dropzone-file" 
                                            type="file"
                                            onChange={handleChangeImage}
                                        />
                                    </label>
                                </div> 
                            </div>
                            <div className="flex space-x-4 w-full">
                                <div className="space-y-4 w-full">
                                    <div className="group space-y-2">
                                        <label htmlFor="nama" className="w-64">Nama</label>
                                        <input 
                                            className="w-full border rounded p-2 border-gray-300 outline-none"
                                            type="text" 
                                            value={name}
                                            onChange={handleChangeName} 
                                            placeholder="Masukan Nama"
                                        />
                                    </div>
                                    <div className="group space-y-2">
                                        <label htmlFor="email" className="w-64">Email</label>
                                        <input 
                                            className="w-full border rounded p-2 border-gray-300 outline-none"
                                            type="email" 
                                            value={email}
                                            onChange={handleChangeEmail}
                                            placeholder="Masukan Email"
                                        />
                                    </div>
                                    <div className="group space-y-2">
                                        <label htmlFor="password" className="w-64">Password</label>
                                        <input 
                                            className="w-full border rounded p-2 border-gray-300 outline-none"
                                            type="password" 
                                            value={password}
                                            onChange={handleChangePassword}
                                            placeholder="Masukan Password"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 w-full">
                                    <div className="group space-y-2">
                                        <label htmlFor="password" className="w-64">Tanggal Lahir</label>
                                        <input 
                                            className="w-full border rounded p-2 border-gray-300 outline-none"
                                            type="date"
                                            value={dob}
                                            onChange={handleChangeDOB}    
                                        />
                                    </div>
                                    <div className="group space-y-2">
                                        <label htmlFor="kode" className="w-64">Jenis Kelamin</label>
                                        <select 
                                            className="w-full border rounded p-2 border-gray-300 outline-none"
                                            value={gender}
                                            onChange={handleChangegender}
                                        >
                                            {Object.keys(genders).map(genderName => (
                                                <>
                                                    <option key={genderName} value={genderName}>
                                                        {genderName}
                                                    </option>
                                                </>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="group space-y-2">
                                        <label htmlFor="kode" className="w-64">Role</label>
                                        <select 
                                            className="w-full border rounded p-2 border-gray-300 outline-none"
                                            value={role}
                                            onChange={handleChangeRole}
                                        >
                                            {Object.keys(roles).map(roleName => (
                                                <>
                                                    <option key={roleName} value={roleName}>
                                                        {roleName}
                                                    </option>
                                                </>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full p-2 px-5 bg-sky-500 rounded-md text-white font-medium hover:bg-sky-600 transition duration-300 ease-in-out">Kirim</button>
                </form>
            </div>
        </>
    )
}