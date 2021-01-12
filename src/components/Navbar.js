import React from 'react'
import {Link} from 'gatsby';
export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/index">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/example">Header</Link>
                </li>
                <li>
                    <Link to="/images">Images</Link>
                </li>
            </ul>
        </nav>
    )
}
