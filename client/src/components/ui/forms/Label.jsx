import PropTypes from 'prop-types';

function Label(props) {
    return (
        <label
            {...props}
            className="text-xs font-montserrat font-medium text-primary-blue"
        >
            {props.children}
        </label>
    );
}

Label.propTypes = {
    children: PropTypes.node
};

export default Label;
