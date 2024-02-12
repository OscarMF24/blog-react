import PropTypes from 'prop-types';

function ButtonPrimary(props) {
    return(
        <button 
            {...props}
            className="transition font-montserrat ease-in-out delay-150 bg-primary-blue rounded text-white px-6 py-2 text-sm font-medium min-h-10 hover:-translate-y-1 hover:scale-105 hover:opacity-80 duration-300"
        >
            {props.children}
        </button>
    )
}

ButtonPrimary.propTypes = {
    children: PropTypes.node
};

export default ButtonPrimary;