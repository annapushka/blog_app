import Modal from 'shared/ui/Modal/Modal';

import { Suspense } from 'react';
import Loader from 'shared/ui/Loader/Loader';
import { LoginForm } from '../LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={className}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginForm />
        </Suspense>
    </Modal>
);

export default LoginModal;
