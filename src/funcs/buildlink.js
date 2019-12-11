import React, { Component } from 'react';

export default function buildLink(endpoint) {
  const p = process.env.PUBLIC_URL;
  if (!endpoint) {
    endpoint = '';
  }
  const u = p + endpoint;
  return u;
}
