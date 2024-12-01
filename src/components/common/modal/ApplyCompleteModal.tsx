'use client';

import { Dialog } from '@headlessui/react';

interface ApplyCompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyCompleteModal({ isOpen, onClose }: ApplyCompleteModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded-lg bg-white p-6">
          <Dialog.Title className="text-lg font-medium text-center mb-4">
            지원 완료
          </Dialog.Title>

          <div className="text-center mb-6">
            <p>지원이 완료되었습니다.</p>
            <p className="text-sm text-gray-500 mt-2">
              지원 현황은 마이페이지에서 확인하실 수 있습니다.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              확인
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}