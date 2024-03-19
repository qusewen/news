import Card from "../card";
import Loader from "../loader";
import {useGetPostsQuery} from "../../api";
import classes from './index.module.scss'
import {FixedSizeList} from "react-window";

const PostList = () => {
    const {data: posts = [], isFetching} = useGetPostsQuery();

    const LIST_BODY_HEIGHT: number = 900;
    const LIST_BODY_WIDTH: number = 900;
    const LIST_ITEM_SIZE: number = 150;

    if (isFetching) return <Loader/>

    return (
        <>
            <h1 className={classes.title}>Список постов</h1>
            <FixedSizeList
                style={{margin: '0 auto'}}
                height={LIST_BODY_HEIGHT}
                itemCount={posts?.length}
                itemSize={LIST_ITEM_SIZE}
                width={LIST_BODY_WIDTH}
            >
                {({index, style}) => (
                    <div style={{...style, width: '80%'}} className={classes.cardBody}>
                        <Card index={index} item={posts[index]}/>
                    </div>
                )}
            </FixedSizeList>
        </>
    )


}
export default PostList
