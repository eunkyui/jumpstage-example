'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Dialog } from '@headlessui/react'

type User = {
  name: string;
  email: string;
}

export default function Header() {
  const router = useRouter()
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false)

  // 실제로는 전역 상태 관리나 Context를 사용해야 하지만,
  // 데모를 위해 localStorage 사용
  const [user, setUser] = React.useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('user')
      return saved ? JSON.parse(saved) : null
    }
    return null
  })

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    setIsLogoutDialogOpen(false)
    router.push('/')
  }

  return (
    <header className="border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              JumpStage
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/jobs" className="hover:text-primary px-3 py-2">
                채용정보
              </Link>
              <Link href="/returnship" className="hover:text-primary px-3 py-2">
                리턴십
              </Link>
              <Link href="/community" className="hover:text-primary px-3 py-2">
                커뮤니티
              </Link>
              <Link href="/profile" className="hover:text-primary px-3 py-2">
                프로필/경력관리
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-600">{user.name}님</span>
                <button
                  onClick={() => setIsLogoutDialogOpen(true)}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <>
                <Link href="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                  로그인
                </Link>
                <Link
                  href="/signup"
                  className="ml-4 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark"
                >
                  회원가입
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* 로그아웃 확인 다이얼로그 */}
      <Dialog
        open={isLogoutDialogOpen}
        onClose={() => setIsLogoutDialogOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded-lg bg-white p-6">
            <Dialog.Title className="text-lg font-medium mb-4">
              로그아웃 확인
            </Dialog.Title>
            <Dialog.Description className="mb-6">
              정말 로그아웃 하시겠습니까?
            </Dialog.Description>

            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsLogoutDialogOpen(false)}
              >
                취소
              </button>
              <button
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                onClick={handleLogout}
              >
                확인
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  )
}