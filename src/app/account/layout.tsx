import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account - COMET',
  description: 'Manage your COMET account',
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}