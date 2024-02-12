import PropTypes from 'prop-types';

function TitleSmall({ children, className, ...rest }) {
    return(
        <h6 
            className={`font-medium text-lg text-[#333333] ${className}`}
            {...rest}
        >
            {children}
        </h6>
    )
}

TitleSmall.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

TitleSmall.defaultProps = {
    className: ''
};

export default TitleSmall;