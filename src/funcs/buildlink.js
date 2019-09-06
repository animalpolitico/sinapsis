import React, { Component } from "react";

export default function buildLink(endpoint) {
  var p = process.env.PUBLIC_URL;
  if (!endpoint) {
    endpoint = "";
  }
  var u = p + endpoint;
  return u;
}
