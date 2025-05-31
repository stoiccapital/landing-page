'use client';

import React from 'react';

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto max-w-4xl p-6">
        {children}
      </main>
    </div>
  );
} 