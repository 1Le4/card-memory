import { Link } from "react-router-dom"
import Grid from "../Grid/Grid.jsx"

export default function GamePage(){
    return(
        <>
        <Link to ="/">На главную</Link>
        <Grid />
        </>
    )
}