import classes from './index.module.scss'
import Button from "../button/inedex.tsx";
import {ButtonType} from "../../types/enums/buttonEnum.ts";
import {Link} from "react-router-dom";

interface CardProps {
    item: Post;
    index: number;
}

const Card = ({item, index}: CardProps) => {
    const START_PAGE_INDEX: number = 1;
    const START_CUT_INDEX: number = 0;
    const END_CUT_INDEX: number = 110;

        return <div className={classes.card}>
            <h2 className={classes.title}>{index + START_PAGE_INDEX + '-' + item?.title}</h2>
            <p className={classes.text}>{item?.body?.length > END_CUT_INDEX ? item?.body.substring(START_CUT_INDEX, END_CUT_INDEX) + '...' : item?.body}</p>
            <Link to={`/${item?.id}`}><Button type={ButtonType.OPEN} title={'Просмотр'}/></Link>
        </div>

}

export default Card
