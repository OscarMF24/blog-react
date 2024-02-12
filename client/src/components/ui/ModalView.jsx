import { useEffect } from 'react';
import PropTypes from 'prop-types';
import TitleSmall from './TitleSmall';
import ClosedIcon from './icons/ClosedIcon';

function ModalView({ isOpen, onClose, children, title }) {
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
            className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 ${
                isOpen ? 'flex' : 'hidden'
            } justify-center items-end`}
            onClick={handleBackdropClick}
            id="modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="relative w-full bg-white rounded-t-lg transition-transform duration-300 py-5 h-[95vh]"
                style={{
                    transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="container mx-auto px-3">
                    <div className="flex justify-between items-center text-lg font-medium">
                        <TitleSmall id="modal-title" className="uppercase">
                            {title}
                        </TitleSmall>
                        <button onClick={onClose} aria-label="Close modal" className="outline-none focus:outline-none">
                            <ClosedIcon aria-hidden="true" className="w-6 h-6 text-red-600" />
                        </button>
                    </div>
                    <div className="mt-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

ModalView.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
};

export default ModalView;
