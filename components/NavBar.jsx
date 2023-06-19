'use-client'
import Link from "next/link"

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1 ">
                    <Link href="/" className="btn btn-ghost normal-case text-xl">Next_learn</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="">
                        <Link href="/blogs" className="btn btn-ghost normal-case text-xl">Blogs</Link>
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpre00.deviantart.net%2F212e%2Fth%2Fpre%2Fi%2F2015%2F204%2F0%2F7%2Fwater_tribe_jon_snow_by_pip11-d92jkl3.jpg&f=1&nofb=1&ipt=36b2508c586845db6d21ad32240e72c305e5d6a698a5ea2fb1b53cc3d28ffa98&ipo=images" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar