import { useEffect } from 'react';
import PropTypes from 'prop-types';

import TitleSmall from './TitleSmall';
import ClosedIcon from './icons/ClosedIcon';

function Modal({ isOpen, onClose, children, title }) {

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = (event) => {
        if (event.target.id === 'modal-backdrop') {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-gray-600/50 overflow-y-auto h-full w-full px-4"
            onClick={handleBackdropClick}
            id="modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="relative top-20 mx-auto py-3 px-5 border w-full max-w-md shadow-lg rounded-md bg-white"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center text-lg font-medium">
                    <TitleSmall id="modal-title" className="uppercase">
                        {title}
                    </TitleSmall>
                    <button onClick={onClose} aria-label="Close">
                        <ClosedIcon 
                            aria-hidden="true" 
                            className="w-6 h-6 text-red-600"
                        />
                    </button>
                </div>
                <div className="mt-3">
                    {children}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
};

export default Modal;
