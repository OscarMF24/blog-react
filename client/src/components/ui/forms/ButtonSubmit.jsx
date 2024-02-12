import PropTypes from 'prop-types';

function ButtonSubmit({children, className, ...rest}) {
    return(
        <button 
            {...rest}
            className={`transition font-montserrat ease-in-out delay-150 rounded text-white px-6 py-2 text-sm font-medium min-h-10 hover:-translate-y-1 hover:scale-105 hover:opacity-80 duration-300 ${className}`}
        >
            {children}
        </button>
    )
}

ButtonSubmit.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

ButtonSubmit.defaultProps = {
    className: "bg-primary-green"
};

export default ButtonSubmit;