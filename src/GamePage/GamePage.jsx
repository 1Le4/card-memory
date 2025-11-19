import { Link, Outlet } from "react-router-dom"
import Grid from "../Grid/Grid.jsx"

export default function GamePage(){
    return(
        <>
        <header>
            <h1>Игра memory</h1>
             <Link to ="/">На главную</Link>
        </header>
        <Outlet />
        <footer>
            <p>&copy; Мишаня 2025г</p>
        </footer>
        </>
    )
}