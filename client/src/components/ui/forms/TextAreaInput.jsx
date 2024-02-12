import PropTypes from 'prop-types';

function TextAreaInput(props) {
    return (
        <textarea
            {...props}
            className="px-2 py-1 w-full font-montserrat h-32 border rounded border-primary-blue focus:outline-none focus:ring-0 focus:border-2 focus:border-secondary-blue"
            rows={5}
        >
            {props.children}
        </textarea>
    );
}

TextAreaInput.propTypes = {
    children: PropTypes.node
};

export default TextAreaInput;