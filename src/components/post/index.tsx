import Button from "../button/inedex.tsx";
import {ButtonType} from "../../types/enums/buttonEnum.ts";
import {Link, useParams} from "react-router-dom";
import {useGetPostQuery} from "../../api";
import Loader from "../loader";
import classes from './index.module.scss'

const Post = () => {
    const DEFAULT_PAGE = '0';
    const {postId} = useParams()
    const {data, isFetching} = useGetPostQuery(postId || DEFAULT_PAGE)

    if (isFetching) return <Loader/>

    return (
        <div className={classes.container}>
            <Link to={`/`}><Button type={ButtonType.BACK} title={'Назад'}/></Link>
            <div className={classes.contentBody}>
                <h2>{data?.title}</h2>
                <p>{data?.body}</p>
            </div>
        </div>
    )
}

export default Post