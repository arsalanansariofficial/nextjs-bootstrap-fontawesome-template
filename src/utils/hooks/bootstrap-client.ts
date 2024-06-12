'use client';
import { useEffect } from 'react';

export default function Bootstrap() {
  useEffect(function () {
    import('bootstrap');
  }, []);
  return null;
}
