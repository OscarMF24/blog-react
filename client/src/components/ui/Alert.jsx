import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Alert({ message, type }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!message) return;
        setShow(true);

        const timer = setTimeout(() => {
            setShow(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [message]);

    if (!message) return null;

    const baseClasses = "px-4 py-3 rounded z-50 transition-all duration-500";
    const alertClasses = type === 'error' 
        ? `${baseClasses} bg-red-100 border border-red-400 text-red-700` 
        : `${baseClasses} bg-green-100 border border-green-400 text-green-700`;

    // Añadir transición para "subir" y desvanecerse
    const positioningClasses = `fixed top-5 right-5 transform ${show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`;

    return (
        <div className={`${alertClasses} ${positioningClasses}`} role="alert" style={{ transition: 'all 0.5s ease-in-out' }}>
            {message}
        </div>
    );
}

Alert.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string.isRequired
};

export default Alert;
