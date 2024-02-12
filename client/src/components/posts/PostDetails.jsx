import PropTypes from 'prop-types';
import { format } from "date-fns";
import { es } from "date-fns/locale";

import TitleSmall from '../ui/TitleSmall';

function PostDetails({post}){
    return(
        <article className="font-montserrat">
            <TitleSmall>
                {post.title}
            </TitleSmall>
            <p>
                <span className="text-stone-500">Fecha de publicación: {format(new Date(post.createdAt), "dd 'de' MMMM 'de' yyyy 'a las' hh:mm a", { locale: es })}</span> <br /> <br />
                <span className="font-medium">Autor:</span> <br />
                {post.author}<br /> <br />
                <span className="font-medium">Descripción:</span> <br />
                {post.description}
            </p>
        </article>
    )
}

PostDetails.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostDetails;