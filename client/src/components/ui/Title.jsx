import PropTypes from 'prop-types';

function Title(props) {
    return(
        <h1 
            className="font-montserrat font-semibold text-white text-center text-7xl"
        >
            {props.children}
        </h1>
    )
}

Title.propTypes = {
    children: PropTypes.node
};

export default Title;