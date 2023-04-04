import React from 'react';
import { API_FAKE } from './apiFake';
import { useEffect } from 'react';

export default function ApiData() {
  useEffect(() => {
    async function run() {
      const result = await fetch(API_FAKE);
    }
    run();
  }, []);
  return <div>ApiData</div>;
}
