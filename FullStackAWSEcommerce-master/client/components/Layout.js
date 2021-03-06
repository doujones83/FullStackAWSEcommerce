import React from 'react'
import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';


const Layout = ({ children }) => {
    const head = () => (
        <React.Fragment>
          <link rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" 
          crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
          <link rel= "stylesheet" href="/static/css/index.css" />
        </React.Fragment>
    )
         
   const nav = () => (
        <ui className="nav nav-tabs bg-primary">
            <li className="nav-item">
              <Link href="/">
                <a className = "nav-link text-dark" href="">Home Page</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login">
                <a className = "nav-link text-dark" href="">Login</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register">
                <a className = "nav-link text-dark" href="">Register</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/logout">
                <a className = "nav-link text-dark" href="#">Logout</a>
              </Link>
            </li>
        </ui>
   ) 
   return <React.Fragment>
     {nav()} {head()} <div className="container pt-5 pb-5">{children}</div>
    </React.Fragment>
}

export default Layout;