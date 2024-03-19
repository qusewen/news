import {memo} from "react";
import loader from '../../assets/loader.svg'
import classes from './index.module.scss'

const Loader = memo(() =>{
    return (
        <div className={classes.loader}>
            <img src={loader} alt={'loader'}/>
        </div>
    )
})

export default Loader
