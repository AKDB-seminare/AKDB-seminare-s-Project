// Index page for seminar management application
import '../styles/globals.css';
import React from 'react';
import Head from 'next/head';
import SeminarManagement from '../components/SeminarManagement';

export default function Home() {
  return (
    <>
      <Head>
        <title>Správa seminářů</title>
        <meta name="description" content="Aplikace pro správu seminářů" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <SeminarManagement />
      </main>
    </>
  );
}
