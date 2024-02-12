import PropTypes from 'prop-types';

function Input(props) {
    return (
        <input
            {...props}
            className="px-2 py-1 h-10 w-full font-montserrat border rounded border-primary-blue focus:outline-none focus:ring-0 focus:border-2 focus:border-secondary-blue"
        >
            {props.children}
        </input>
    );
}

Input.propTypes = {
    children: PropTypes.node
};

export default Input;
