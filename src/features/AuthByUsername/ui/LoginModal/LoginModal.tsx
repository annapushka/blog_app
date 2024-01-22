import { Suspense } from 'react';
import Modal from '@/shared/ui/redesigned/Modal/Modal';

import Loader from '@/shared/ui/deprecated/Loader/Loader';
import { LoginForm } from '../LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal className={className} isOpen={isOpen} onClose={onClose} lazy>
    <Suspense fallback={<Loader />}>
      <LoginForm onSuccess={onClose} />
    </Suspense>
  </Modal>
);

export default LoginModal;
