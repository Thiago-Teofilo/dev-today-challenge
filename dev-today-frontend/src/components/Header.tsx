import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <header className="fixed flex top-0 left-0 items-center bg-blue-600 py-4 text-white w-full">
            <NavLink className='w-full' to='/'>Home</NavLink>
        </header>
    )
}